import { IList } from "models";
import { ActionTypes } from "models/redux.model";
import { SET_VIDEO_LIST } from "utils/constants";

const initialState: IList | null = null;

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
