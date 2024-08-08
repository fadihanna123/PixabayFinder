import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
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
  define: {
    'process.env': {
      VITE_APP_PUBLIC_PIXABAY_BASE_URL: 'https://pixabay.com/api/',
      VITE_APP_PUBLIC_PIXABAY_KEY: '18269871-9984b5717c4bef14378a76910',
    },
  },
});
