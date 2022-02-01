import { ActionTypes } from "typings/redux";
import { SET_LOADING } from "utils/constants";

const initialState: boolean = false;

export const loadingReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_LOADING:
      return payload;

    default:
      return state;
  }
};
