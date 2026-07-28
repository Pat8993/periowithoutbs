// Production server for the built site. The TanStack Start build emits a portable
// fetch handler (dist/server/server.js) plus static client assets (dist/client);
// this wraps them in a Bun server on port 3000 — static files first, API routes,
// then SSR for the rest. Run `bun run build` before starting. Restart it with
// `bun run publish`.
//
// Starting a new instance supersedes the old one: it frees the port no matter
// which user owns the current server (provisioning starts it as `engine`; a team
// member's `bun run publish` runs as their own user), so publish never collides
// with an already-running server. Every sandbox user has passwordless sudo, so
// the takeover works across user boundaries.
import handler from "./dist/server/server.js";
import {
  saveUploadedFile,
  deleteImageFile,
  removeImageFromModules,
  addImageToModules,
} from "./src/lib/adminApi.ts";

// Pinned, NOT read from the environment. The published preview URL
// (<label>.<PUBLIC_SITE_DOMAIN>) is reverse-proxied to 0.0.0.0:3000 inside the
// sandbox, so the default site MUST bind there. Bun auto-loads .env files, so
// honouring process.env.PORT/HOST would let a stray env var or a .env in the site
// dir silently move the site off :3000 (or onto loopback) and break the public URL.
const PORT = 3000;
const HOST = "0.0.0.0";
const CLIENT_DIR = `${import.meta.dir}/dist/client`;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

async function handleApiRequest(req: Request): Promise<Response | null> {
  const { pathname } = new URL(req.url);

  // POST /api/upload — multipart file upload
  if (pathname === "/api/upload" && req.method === "POST") {
    try {
      const formData = await req.formData();
      const file = formData.get("file");
      if (!file || !(file instanceof File)) {
        return json({ error: "No file provided" }, 400);
      }
      const filename =
        (formData.get("filename") as string) || file.name;
      const savedName = await saveUploadedFile(file, filename);
      return json({ path: `/images/${savedName}`, filename: savedName });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed";
      return json({ error: message }, 500);
    }
  }

  // POST /api/images/remove — delete file and optionally update modules.ts
  if (pathname === "/api/images/remove" && req.method === "POST") {
    try {
      const body = (await req.json()) as {
        filename: string;
        updateModules?: boolean;
      };
      if (!body.filename) {
        return json({ error: "No filename provided" }, 400);
      }
      await deleteImageFile(body.filename);
      if (body.updateModules) {
        const imageSrc = `/images/${body.filename.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase()}`;
        await removeImageFromModules(imageSrc);
      }
      return json({ removed: body.filename });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Remove failed";
      return json({ error: message }, 500);
    }
  }

  // POST /api/images/add-to-atlas — add entry to modules.ts image atlas
  if (pathname === "/api/images/add-to-atlas" && req.method === "POST") {
    try {
      const body = (await req.json()) as {
        filename: string;
        name: string;
        disclaimer?: string;
      };
      if (!body.filename || !body.name) {
        return json({ error: "filename and name are required" }, 400);
      }
      const sanitized = body.filename
        .replace(/[^a-zA-Z0-9._-]/g, "-")
        .toLowerCase();
      const imageSrc = `/images/${sanitized}`;
      const ok = await addImageToModules(
        imageSrc,
        body.name,
        body.disclaimer || "Illustrative example — for educational purposes."
      );
      if (!ok) {
        return json(
          { error: "Could not locate image atlas in modules.ts" },
          500
        );
      }
      return json({ added: { src: imageSrc, name: body.name, filename: sanitized } });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Add to atlas failed";
      return json({ error: message }, 500);
    }
  }

  return null; // Not an API route
}

// Free PORT regardless of which user owns the current listener. lsof runs under
// sudo so it can see (and the kill can signal) a process owned by another user;
// the loop waits for the socket to actually release before we bind.
const freePort =
  `for _ in $(seq 1 25); do ` +
  `pids=$(lsof -t -iTCP:${String(PORT)} -sTCP:LISTEN 2>/dev/null || true); ` +
  `if [ -z "$pids" ]; then exit 0; fi; ` +
  `kill $pids 2>/dev/null || true; sleep 0.2; ` +
  `done`;

// Take over the port, re-freeing and retrying if another publish grabbed it in the
// gap between freeing and binding (last publish wins). Bun.serve throws EADDRINUSE
// synchronously, so without this a raced publish would die while the shell already
// reported success.
for (let attempt = 1; ; attempt++) {
  await Bun.$`sudo sh -c ${freePort}`.quiet().nothrow();
  try {
    Bun.serve({
      port: PORT,
      hostname: HOST,
      async fetch(req) {
        const { pathname } = new URL(req.url);

        // API routes first
        if (pathname.startsWith("/api/")) {
          const apiResponse = await handleApiRequest(req);
          if (apiResponse) return apiResponse;
        }

        // Static files second
        if (pathname !== "/") {
          const file = Bun.file(CLIENT_DIR + pathname);
          if (await file.exists()) return new Response(file);
        }

        // SSR for everything else
        return (
          handler as { fetch: (r: Request) => Response | Promise<Response> }
        ).fetch(req);
      },
    });
    break;
  } catch (err) {
    if (attempt >= 10) throw err;
    await Bun.sleep(200);
  }
}

console.log(`team-site serving on http://${HOST}:${String(PORT)}`);
