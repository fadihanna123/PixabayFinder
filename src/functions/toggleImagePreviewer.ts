import { HitsOfList } from 'models';
import { Dispatch } from 'react';
import { setImage } from 'redux/reducers/image';
import { setToggler } from 'redux/reducers/toggler';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Toggle Image-previewer.
 *
 * @param item - Imagelist
 * @param dispatch - Dispatch
 * @returns Void
 */

export const toggleImagePreviewer = (
  item: HitsOfList,
  dispatch: Dispatch<any>
) => {
  dispatch(setToggler(true));
  dispatch(setImage(item.webformatURL));
};
