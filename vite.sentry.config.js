import { defineConfig } from "vite";

export default defineConfig({
  root: "variants/sentry",
  server: {
    host: "127.0.0.1",
    port: 5176,
    strictPort: true,
  },
  build: {
    outDir: "../../dist-sentry",
    emptyOutDir: true,
  },
});
