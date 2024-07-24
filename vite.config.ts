import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    svgrPlugin({
      include: "**/*.svg",
      svgrOptions: {
        exportType: "default",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8000,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: true,
    // watch: {
    //   include: "src/**",
    //   exclude: "node_modules/**, .git/**, dist/**, .vscode/**",
    // },
    assetsDir: "assets",
    cssCodeSplit: true,
    sourcemap: false,
    ssr: false,
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  test: {
    includeSource: ["src/**/*.{js,ts,jsx,tsx}"], // Incluye los archivos de origen para las pruebas
    environment: "happy-dom", // O puedes usar 'jsdom' o 'node' según tus necesidades
    globals: true, // Habilita el uso de variables globales como describe y it
    setupFiles: ["./setupTest.ts"],
    coverage: {
      provider: "istanbul", // Puedes usar 'istanbul' o 'c8'
      reporter: ["text", "json", "html"], // Formatos de reporte de cobertura
      reportsDirectory: "coverage", // Directorio donde se guardarán los reportes
      exclude: [
        "**/main.tsx",
        "**/stories/**",
        "**/*.cjs",
        "**/.storybook/*.ts",
        "**/.storybook/*.tsx",
        "**/coverge/**",
        "**/demo/**",
        "**/mocks/**",
        "**/constants/**",
      ], // Excluye los archivos con extensión .stories.ts del coverage
    },
  },
});
