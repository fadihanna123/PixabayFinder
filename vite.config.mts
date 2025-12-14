import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import fs from 'fs';
import htmlMinifier from 'vite-plugin-html-minifier';
import dotenv from 'dotenv';

dotenv.config();

const {
  VITE_DEV_PORT: devPort,
  VITE_PROD_PORT: prodPort,
  NODE_ENV: devMode,
} = process.env;

const isDev = devMode === 'development';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), htmlMinifier()],
  build: {
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    outDir: 'build',
  },
  base: '/',
  server: {
    port: Number(isDev ? devPort : prodPort),
    strictPort: true,
    host: true,
    watch: {
      usePolling: true,
    },
    https: isDev
      ? {
          key: fs.readFileSync('./.cert/key.pem'),
          cert: fs.readFileSync('./.cert/cert.pem'),
        }
      : undefined,
  },
  preview: {
    port: 3000,
    strictPort: true,
    open: false,
    host: true,
  },
});
