// Cross-platform script to copy build output (works on Windows, macOS, Linux)
// Replaces: cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/

import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const standaloneDir = join(root, ".next", "standalone");

const staticSrc = join(root, ".next", "static");
const staticDst = join(standaloneDir, ".next", "static");

const publicSrc = join(root, "public");
const publicDst = join(standaloneDir, "public");

try {
  if (existsSync(staticSrc)) {
    mkdirSync(dirname(staticDst), { recursive: true });
    cpSync(staticSrc, staticDst, { recursive: true });
    console.log("Copied .next/static -> .next/standalone/.next/static");
  } else {
    console.log("Skipping .next/static (not found)");
  }

  if (existsSync(publicSrc)) {
    mkdirSync(publicDst, { recursive: true });
    cpSync(publicSrc, publicDst, { recursive: true });
    console.log("Copied public/ -> .next/standalone/public/");
  } else {
    console.log("Skipping public/ (not found)");
  }

  console.log("Build output copy complete.");
} catch (err) {
  console.error("Failed to copy build output:", err.message);
  process.exit(1);
}
