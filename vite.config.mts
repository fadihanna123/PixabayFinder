import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    host: true,
    https: {
      key: fs.readFileSync('C:/Users/Fadi_Dev/cert.key'),
      cert: fs.readFileSync('C:/Users/Fadi_Dev/cert.crt'),
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
    open: false,
    host: true,
  },
});
