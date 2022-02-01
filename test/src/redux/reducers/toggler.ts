import { ActionTypes } from "typings/redux";
import { SET_TOGGLER } from "utils/constants";

const initialState: boolean = false;

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
