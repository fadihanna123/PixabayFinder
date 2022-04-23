import { ActionTypes } from 'models/redux.model';
import { SET_IMAGE } from 'utils/constants';

const initialState: string = "";

export const imageReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_IMAGE:
      return payload;

    default:
      return state;
  }
};
