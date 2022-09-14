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

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Toggler action.
 *
 * @param payload - Boolean
 * @returns Object
 */

export const setToggler = (payload: boolean): object => {
  return { type: SET_TOGGLER, payload };
};

/**
 * Search-form action.
 *
 * @param payload - Search-form values
 * @returns AnyAction
 */

export const setSearchForm = (payload: SearchForm): AnyAction => {
  return { type: SET_SEARCH_FORM, payload };
};

/**
 * Image action.
 *
 * @param payload - String
 * @returns Object
 */

export const setImage = (payload: string) => {
  return { type: SET_IMAGE, payload };
};

/**
 * Loading action.
 *
 * @param payload - Boolean
 * @returns Object
 */

export const setLoading = (payload: boolean) => {
  return { type: SET_LOADING, payload };
};

/**
 * Imagelist action.
 *
 * @param payload - Promise contains Imagelist array | void
 * @returns Object
 */

export const setImgList = (payload: Promise<void | IList[]>) => {
  return { type: SET_IMG_LIST, payload };
};

/**
 * Videolist action.
 *
 * @param payload - Promise contains Imagelist array | void
 * @returns Object
 */

export const setVideoList = (payload: Promise<void | IList[]>) => {
  return { type: SET_VIDEO_LIST, payload };
};

/**
 * SearchType action.
 *
 * @param payload - String
 * @returns Object
 */

export const setSearchType = (payload: string) => {
  return { type: SET_SEARCH_TYPE, payload };
};
