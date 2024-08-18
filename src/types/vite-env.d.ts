/// <reference types="vite/client" />
declare module 'eslint-plugin-html';
declare module '@typescript-eslint/parser';
declare module '@eslint/js';
declare module '@eslint/eslintrc';

interface ImportMetaEnv {
  VITE_APP_PUBLIC_PIXABAY_BASE_URL: string;
  VITE_APP_PUBLIC_PIXABAY_KEY: string;
  NODE_VERSION: string;
  NODE_ENV: 'development' | 'production' | 'test';
  // more env variables...
}
