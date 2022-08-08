import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

export default defineConfig({
  plugins: [
    react(),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Kanit:wght@100;400;600&display=swap'
    ]),
  ],
});
