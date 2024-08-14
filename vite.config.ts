import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig, UserConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig((config: UserConfig) => {
  const isProduction = config.mode === "production";
  return {
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
    server: {
      port: 8000,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
      minify: isProduction, // Minificar solo en producción
      assetsDir: "assets",
      cssCodeSplit: true, // Dividir CSS para ambos modos
      sourcemap: !isProduction, // Generar sourcemaps solo en desarrollo
      rollupOptions: {
        treeshake: isProduction, // Tree shaking solo en producción
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
    optimizeDeps: {
      esbuildOptions: {
        minify: false, // No minimizar dependencias en desarrollo
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
          "**/vite.config.ts",
          "**/*.cjs",
          "**/coverge/**",
          "**/dist/**",
          "**/mocks/**",
          "**/constants/**",
          "**/modules/**",
          "**/views/**",
          "**/cypress/**",
          "cypress.config.js",
        ],
      },
    },
  };
});
