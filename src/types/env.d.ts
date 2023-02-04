declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_PIXABAY_BASE_URL: string;
      REACT_APP_PIXABAY_KEY: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};
