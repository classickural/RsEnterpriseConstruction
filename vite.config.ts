// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// // You must use an async function for dynamic imports
// export default defineConfig(async () => {
//   const isReplit = process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined;
//   const cartographerPlugin = isReplit
//     ? [(await import("@replit/vite-plugin-cartographer")).cartographer()]
//     : [];

//   return {
//     plugins: [
//       react(),
//       runtimeErrorOverlay(),
//       ...cartographerPlugin,
//     ],
//     resolve: {
//       alias: {
//         "@": path.resolve(import.meta.dirname, "client", "src"),
//         "@shared": path.resolve(import.meta.dirname, "shared"),
//         "@assets": path.resolve(import.meta.dirname, "attached_assets"),
//       },
//     },
//     root: path.resolve(import.meta.dirname, "client"),

//     // 👇 Key change for GitHub Pages
//     base: "/", // <-- replace with actual repo name

//     build: {
//       outDir: path.resolve(import.meta.dirname, "dist"), // recommended for gh-pages
//       emptyOutDir: true,
//     },
//   };
// });



import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// No async function needed now
export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),

  // Set base URL for GitHub Pages deployment
  base: "/RsEnterpriseConstruction/",

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
