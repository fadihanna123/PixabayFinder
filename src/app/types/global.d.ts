declare global {
  /**
   * @param { number } total
   * @param { number } totalHits
   * @param { HitsOfList[] } hits
   */
  interface IList {
    total: number;
    totalHits: number;
    hits: HitsOfList[];
  }

  interface HitsOfList {
    id: number;
    pageURL: string;
    type: string;
    tags: string;
    previewURL: string;
    previewWidth: number;
    previewHeight: number;
    webformatURL: string;
    webformatWidth: number;
    webformatHeight: number;
    largeImageURL: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    views: number;
    downloads: number;
    favorites: number;
    likes: number;
    comments: number;
    user_id: number;
    user: string;
    userImageURL: string;
  }

  /**
   * @param { JSX.Element } children
   * @param { string } dataSal
   */
  interface FooterProps {
    children: JSX.Element;
    dataSal: string;
  }

  /**
   * @param { string[] } className
   */
  interface LoaderProps {
    className: string[];
  }

  /**
   * @param { string } query
   * @param { string } type
   */
  interface SearchForm {
    query: string;
    type: string;
  }

  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_PIXABAY_BASE_URL: string;
      REACT_APP_PIXABAY_KEY: string;
      NODE_VERSION: string;
      NODE_ENV: 'development' | 'production';
    }
  }

  type logType = 'warn' | 'error' | 'log';
}

export {};
