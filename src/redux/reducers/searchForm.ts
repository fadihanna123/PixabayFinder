import { SearchForm } from 'models';
import { ActionTypes } from 'models/redux.model';
import { SET_SEARCH_FORM } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: SearchForm = { query: '', type: 'Images' };

/**
 * Search-form reducer.
 *
 * @param state - Search-form object
 * @param Actiontypes
 * @returns Search-form values | void
 */

export const searchFormReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_SEARCH_FORM:
      return payload;

    default:
      return state;
  }
};
