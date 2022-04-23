import { Dispatch } from 'react';
import { setToggler } from 'redux/actions';

export const toggleImagePreviewer = (item: any, dispatch: Dispatch<any>) => {
  // eslint-disable-next-line no-console
  console.log(item);
  dispatch(setToggler(true));
  // dispatch(setImage(imgUrl));
};
