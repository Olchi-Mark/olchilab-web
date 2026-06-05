import { defineConfig } from "vite";

export default defineConfig({
  root: "variants/vercel",
  server: {
    host: "127.0.0.1",
    port: 5174,
    strictPort: true,
  },
  build: {
    outDir: "../../dist-vercel",
    emptyOutDir: true,
  },
});
