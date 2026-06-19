import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(rootDir, "dist");
const indexPath = join(distDir, "index.html");
const routes = ["company-board", "notion-dashboard-embed", "promotion-template-test"];

for (const route of routes) {
  const routeDir = join(distDir, route);
  await mkdir(routeDir, { recursive: true });
  await copyFile(indexPath, join(routeDir, "index.html"));
}

await copyFile(indexPath, join(distDir, "404.html"));
