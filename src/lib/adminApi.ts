import { readFile, writeFile, unlink, mkdir } from "node:fs/promises";
import { join } from "node:path";

const IMAGES_DIR = join(import.meta.dir, "../public/images");
const MODULES_PATH = join(import.meta.dir, "../src/data/modules.ts");

/**
 * Save an uploaded file to public/images/
 */
export async function saveUploadedFile(file: File, filename: string): Promise<string> {
  await mkdir(IMAGES_DIR, { recursive: true });
  const sanitized = filename.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
  const filePath = join(IMAGES_DIR, sanitized);
  await Bun.write(filePath, file);
  return sanitized;
}

/**
 * Delete a file from public/images/
 */
export async function deleteImageFile(filename: string): Promise<boolean> {
  const sanitized = filename.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
  const filePath = join(IMAGES_DIR, sanitized);
  try {
    await unlink(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Remove an image entry from the image-atlas in modules.ts.
 */
export async function removeImageFromModules(imageSrc: string): Promise<boolean> {
  const content = await readFile(MODULES_PATH, "utf-8");

  // Escape special regex characters in the src
  const escaped = imageSrc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Match the image object with optional trailing comma
  const pattern = new RegExp(
    `\\{\\s*src:\\s*"${escaped}",\\s*name:\\s*"[^"]*",\\s*disclaimer:\\s*"[^"]*",?\\s*\\},?\\s*`,
    "g"
  );

  const updated = content.replace(pattern, "");
  if (updated === content) return false;

  await writeFile(MODULES_PATH, updated, "utf-8");
  return true;
}

/**
 * Add an image entry to the image-atlas in modules.ts.
 */
export async function addImageToModules(
  src: string,
  name: string,
  disclaimer: string
): Promise<boolean> {
  const content = await readFile(MODULES_PATH, "utf-8");

  const newEntry = `              {
                src: "${src}",
                name: "${name}",
                disclaimer: "${disclaimer}",
              },`;

  // Find the closing bracket of the images array in the image-atlas
  // Look for the pattern: the last `            ],` in the file (end of images array)
  const closingBracket = `            ],`;
  const idx = content.lastIndexOf(closingBracket);
  if (idx === -1) return false;

  const updated = content.slice(0, idx) + newEntry + "\n" + content.slice(idx);
  await writeFile(MODULES_PATH, updated, "utf-8");
  return true;
}
