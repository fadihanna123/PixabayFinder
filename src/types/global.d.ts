/// <reference types="vite/client" />
import EN from '../translations/en.json';

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
   * @param { number } duration
   * @param { VideoList } videos
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
    duration?: number;
    videos?: VideoList;
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

  export interface VideoList {
    large: LargeOfVideoList;
    medium: MediumOfVideoList;
    small: SmallOfVideoList;
    tiny: TinyOfVideoList;
  }

  export interface LargeOfVideoList {
    url: string;
    width: number;
    height: number;
    size: number;
    thumbnail: string;
  }

  export interface MediumOfVideoList {
    url: string;
    width: number;
    height: number;
    size: number;
    thumbnail: string;
  }

  export interface SmallOfVideoList {
    url: string;
    width: number;
    height: number;
    size: number;
    thumbnail: string;
  }

  export interface TinyOfVideoList {
    url: string;
    width: number;
    height: number;
    size: number;
    thumbnail: string;
  }

  /**
   * FooterProps
   * @param { JSX.Element } children
   * @param { string } dataSal
   */
  interface FooterProps {
    children: any;
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

  type TRANSLATIONS = typeof EN;

  type logType = 'warn' | 'error' | 'log';

  type searchFormType = 'Images' | 'Videos';

  type METHODS =
    | 'head'
    | 'options'
    | 'put'
    | 'post'
    | 'patch'
    | 'delete'
    | 'get';

  type GlobalContent = {
    darkMode: boolean;
    image: string;
    imgList: IList;
    videoList: IList;
    lang: string;
    searchForm: { query: string; type: string };
    searchType: searchFormType;
    toggler: boolean;
    mediaLoading: boolean;
    setToggler: (toggler: boolean) => void;
    setSearchType: (searchType: searchFormType) => void;
    setSearchForm: (searchForm: SearchForm) => void;
    setMediaLoading: (mediaLoading: boolean) => void;
    setLang: (lang: string) => void;
    setImage: (image: string) => void;
    setImgList: (imgList: IList) => void;
    setDarkMode: (darkMode: boolean) => void;
  };
}

export {};
