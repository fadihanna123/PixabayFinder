import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import fs from 'fs';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    cssMinify: true,
    sourcemap: false,
    outDir: 'build',
  },
  base: '/',
  server: {
    https: isDev
      ? {
          key: fs.readFileSync('./.cert/key.pem'),
          cert: fs.readFileSync('./.cert/cert.pem'),
        }
      : undefined,
    port: 3000,
    strictPort: true,
    host: true,
    watch: {
      usePolling: true,
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
    open: false,
    host: true,
  },
});
