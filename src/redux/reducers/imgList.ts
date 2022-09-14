import { IList } from 'models';
import { ActionTypes } from 'models/redux.model';
import { SET_IMG_LIST } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: IList[] | null = null;

/**
 * Imagelist reducer.
 *
 * @param state - Imagelist array | null
 * @param Actiontypes
 * @returns Void | null
 */

export const imgListReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_IMG_LIST:
      return payload;

    default:
      return state;
  }
};
