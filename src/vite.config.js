import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 5173,
    port: 5173,


    strictPort: true,

  },
  publicDir: 'public',
  plugins: [react()]


});
