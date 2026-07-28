import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PerioSight NBDHE Study Guide — Dental Hygiene Board Exam Review" },
      {
        name: "description",
        content:
          "Comprehensive NBDHE review guide covering scientific foundations, clinical dental hygiene, community health, and state jurisprudence. Includes quick facts, QR demonstration videos, and printable study modules.",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
