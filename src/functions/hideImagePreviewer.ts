import { Dispatch } from 'redux';
import { setToggler } from 'redux/actions';

export const hideImagePreviewer = (
  toggler: boolean,
  dispatch: Dispatch<any>
): object => dispatch(setToggler(!toggler));
