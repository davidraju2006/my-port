import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import postcssTailwind from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    strictPort: true,
    historyApiFallback: true,  // Add this for client-side routing
  },
  publicDir: 'public',
  // Removed css.postcss config to avoid conflict with @tailwindcss/vite plugin
  base: '/',  // Explicit base path
});
