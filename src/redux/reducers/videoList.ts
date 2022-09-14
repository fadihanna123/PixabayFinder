import { IList } from 'models';
import { ActionTypes } from 'models/redux.model';
import { SET_VIDEO_LIST } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: IList | null = null;

/**
 * Videolist reducer.
 *
 * @param state - Videolist object | null
 * @param Actiontypes
 * @returns Void | null
 */

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
