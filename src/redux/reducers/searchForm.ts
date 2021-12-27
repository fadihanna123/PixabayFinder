import { SearchForm } from "typings";
import { ActionTypes } from "typings/redux";
import { SET_SEARCH_FORM } from "utils/constants";

const initialState: SearchForm = { query: "", type: "" };

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
