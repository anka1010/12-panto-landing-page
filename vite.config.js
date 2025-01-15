import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/assets/styles/global.scss';",
      },
    },
  },
  base: "./",
  plugins: [react()],
});
