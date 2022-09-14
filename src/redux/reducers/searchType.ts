import { ActionTypes } from 'models/redux.model';
import { SET_SEARCH_TYPE } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = 'Images';

/**
 * SearchType reducer.
 *
 * @param state - String
 * @param Actiontypes
 * @returns String | void
 */

export const searchTypeReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_SEARCH_TYPE:
      return payload;

    default:
      return state;
  }
};
