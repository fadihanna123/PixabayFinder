import { ActionTypes } from 'models/redux.model';
import { SET_TOGGLER } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = false;

/**
 * Toggler reducer.
 *
 * @param state - Boolean
 * @param Actiontypes
 * @returns Boolean | void
 */

export const togglerReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_TOGGLER:
      return payload;

    default:
      return state;
  }
};
