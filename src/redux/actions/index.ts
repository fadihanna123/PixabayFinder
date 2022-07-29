import { IList, SearchForm } from 'models';
import { AnyAction } from 'redux';
import {
  SET_IMAGE,
  SET_IMG_LIST,
  SET_LOADING,
  SET_SEARCH_FORM,
  SET_SEARCH_TYPE,
  SET_TOGGLER,
  SET_VIDEO_LIST,
} from 'utils/constants';

export const setToggler = (payload: boolean): object => {
  return { type: SET_TOGGLER, payload };
};

export const setSearchForm = (payload: SearchForm): AnyAction => {
  return { type: SET_SEARCH_FORM, payload };
};

export const setImage = (payload: string) => {
  return { type: SET_IMAGE, payload };
};

export const setLoading = (payload: boolean) => {
  return { type: SET_LOADING, payload };
};

export const setImgList = (payload: Promise<void | IList[]>) => {
  return { type: SET_IMG_LIST, payload };
};

export const setVideoList = (payload: Promise<void | IList[]>) => {
  return { type: SET_VIDEO_LIST, payload };
};

export const setSearchType = (payload: string) => {
  return { type: SET_SEARCH_TYPE, payload };
};
