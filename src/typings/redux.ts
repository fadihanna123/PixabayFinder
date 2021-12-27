import { SearchForm } from "typings";
import { IList } from "./list";

export interface ActionTypes {
  type: string;
  payload: void;
}

export interface TogglerReducerTypes {
  togglerReducer: boolean;
}

export interface SearchFormReducerTypes {
  searchFormReducer: SearchForm;
}

export interface ImageReducerTypes {
  imageReducer: string;
}

export interface LoadingReducerTypes {
  loadingReducer: boolean;
}

export interface SearchTypeReducerTypes {
  searchTypeReducer: string;
}

export interface ImgListReducerTypes {
  imgListReducer: IList;
}

export interface VideoListReducerTypes {
  VideoListReducer: any;
}
