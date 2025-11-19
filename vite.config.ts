import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()], // REMOVE Cloudflare + Mocha plugins entirely
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/website-demo2/", // <-- MUST match your repo name exactly
  build: {
    outDir: "dist",
  },
});
