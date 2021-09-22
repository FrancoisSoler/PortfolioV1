import { defineConfig } from "vite";

export default defineConfig({
  base: "/foliov3/",
  build: {
    chunkSizeWarningLimit: 1000,
  },
});