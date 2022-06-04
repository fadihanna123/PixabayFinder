import { ActionTypes } from "models/redux.model";
import { SET_SEARCH_TYPE } from "utils/constants";

const initialState: string = "Images";

export const searchTypeReducer = (
    state = initialState,
    { type, payload }: ActionTypes
) => {
    switch (type) {
        case SET_SEARCH_TYPE:
            return payload;

        default:
            return state;
    }
};
