/// <reference types="vite/client" />

declare global {
  /**
   * IList
   * @param { number } total
   * @param { number } totalHits
   * @param { HitsOfList[] } hits
   */
  interface IList {
    total: number;
    totalHits: number;
    hits: HitsOfList[];
  }

  /**
   * HitsOfList
   * @param { number } id
   * @param { string } pageURL
   * @param { string } type
   * @param { string } tags
   * @param { string } previewURL
   * @param { number } previewWidth
   * @param { number } previewHeight
   * @param { string } webformatURL
   * @param { number } webformatWidth
   * @param { number } webformatHeight
   * @param { number } imageWidth
   * @param { number } imageHeight
   * @param { number } imageSize
   * @param { number } views
   * @param { number } downloads
   * @param { number } favorites
   * @param { number } likes
   * @param { number } comments
   * @param { number } user_id
   * @param { string } user
   * @param { string } userImageURL
   */
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
   * FooterProps
   * @param { JSX.Element } children
   * @param { string } dataSal
   */
  interface FooterProps {
    children: JSX.Element;
    dataSal: string;
  }

  /**
   * LoaderProps
   * @param { string[] } className
   */
  interface LoaderProps {
    className: string[];
  }

  /**
   * SearchForm
   * @param { string } query
   * @param { string } type
   */
  interface SearchForm {
    query: string;
    type: string;
  }

  type logType = 'warn' | 'error' | 'log';

  type searchFormType = 'Images' | 'Videos';
}

export {};
