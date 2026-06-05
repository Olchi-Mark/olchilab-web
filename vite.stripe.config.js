import { defineConfig } from "vite";

export default defineConfig({
  root: "variants/stripe",
  server: {
    host: "127.0.0.1",
    port: 5177,
    strictPort: true,
  },
  build: {
    outDir: "../../dist-stripe",
    emptyOutDir: true,
  },
});
