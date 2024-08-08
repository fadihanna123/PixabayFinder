/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_PUBLIC_PIXABAY_BASE_URL: string;
  VITE_APP_PUBLIC_PIXABAY_KEY: string;
  NODE_VERSION: string;
  NODE_ENV: 'development' | 'production' | 'test';
  // more env variables...
}
