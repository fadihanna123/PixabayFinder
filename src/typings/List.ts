export interface Search {
  query: string;
}

export interface IList {
  total: number;
  totalHits: number;
  hits: {
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
  }[];
}

export interface Props {
  search: { query: string };
  list?: IList | undefined;
  loading?: boolean;
  setSearch?: (search: { query: string }) => void;
  setLoading?: (loading: boolean) => void;
  setList?: (list: IList) => void;
}
