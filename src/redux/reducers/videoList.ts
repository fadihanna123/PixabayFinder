import { IList } from "typings";
import { ActionTypes } from "typings/redux";
import { SET_VIDEO_LIST } from "utils/constants";

const initialState: IList[] | null = null;

export const videoListReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_VIDEO_LIST:
      return payload;

    default:
      return state;
  }
};
