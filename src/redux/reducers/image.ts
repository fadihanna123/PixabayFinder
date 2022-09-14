import { ActionTypes } from 'models/redux.model';
import { SET_IMAGE } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

/**
 * Image reducer.
 *
 * @param state - String
 * @param Actiontypes
 * @returns String | void
 */

export const imageReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_IMAGE:
      return payload;

    default:
      return state;
  }
};
