import { Dispatch } from 'redux';
import { setToggler } from 'redux/reducers/toggler';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Hide Image-previewer
 *
 * @param toggler - Boolean
 * @param dispatch - Dispatch
 * @returns Object
 */

export const hideImagePreviewer = (
  toggler: boolean,
  dispatch: Dispatch<any>
): object => dispatch(setToggler(!toggler));
