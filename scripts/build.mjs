import { cpSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const item of [
  "index.html",
  "assets",
  "entry-portrait.png",
  "entry-switch.mov",
  "hdri"
]) {
  cpSync(join(root, item), join(dist, item), { recursive: true });
}

console.log("Built static site to dist/");
