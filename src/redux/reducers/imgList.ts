import { IList } from "typings";
import { ActionTypes } from "typings/redux";
import { SET_IMG_LIST } from "utils/constants";

const initialState: IList[] | null = null;

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
