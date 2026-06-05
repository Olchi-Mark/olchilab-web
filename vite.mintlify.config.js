import { defineConfig } from "vite";

export default defineConfig({
  root: "variants/mintlify",
  server: {
    host: "127.0.0.1",
    port: 5175,
    strictPort: true,
  },
  build: {
    outDir: "../../dist-mintlify",
    emptyOutDir: true,
  },
});
