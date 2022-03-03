import { Dispatch } from 'react';
import { setImage, setToggler } from 'redux/actions';

export const toggleImagePreviewer = (
  imgUrl: string,
  dispatch: Dispatch<any>
) => {
  dispatch(setToggler(true));
  dispatch(setImage(imgUrl));
};
