import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// PORT/BASE_PATH son opcionales: dev usa 5173 y base "/" (Vercel sirve en raíz).
const port = Number(process.env.PORT ?? 5173);
const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
    // Proxy de dev: /api -> backend FastAPI. En prod (Vercel) no aplica.
    proxy: {
      "/api": {
        target: process.env.API_TARGET ?? "http://localhost:8000",
        changeOrigin: true,
        rewrite: (p: string) => p.replace(/^\/api/, ""),
      },
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
