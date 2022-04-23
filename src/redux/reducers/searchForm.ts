import { SearchForm } from 'models';
import { ActionTypes } from 'models/redux.model';
import { SET_SEARCH_FORM } from 'utils/constants';

const initialState: SearchForm = { query: "", type: "Images" };

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
