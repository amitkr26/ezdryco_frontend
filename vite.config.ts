import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const rawPort = process.env.PORT ?? "5173";

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    ...(process.env.NODE_ENV !== "production"
      ? [runtimeErrorOverlay()]
      : []),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    // Performance optimizations
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Code splitting strategy
        manualChunks: {
          // Vendor libraries - rarely change, heavy caching
          vendor: ["react", "react-dom", "framer-motion"],
          // UI components - shared across routes
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "lucide-react"],
          // Form handling - only needed on specific routes
          forms: ["react-hook-form", "@hookform/resolvers", "zod"],
          // Data utilities
          data: ["@tanstack/react-query"],
        },
        // Chunk naming for better debugging
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name || "";
          if (/\.css$/.test(info)) {
            return "css/[name]-[hash][extname]";
          }
          if (/\.woff2?$/.test(info) || /\.ttf$/.test(info)) {
            return "fonts/[name]-[hash][extname]";
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(info)) {
            return "images/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    // Reduce asset inlining threshold
    assetsInlineLimit: 4096, // 4KB
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
