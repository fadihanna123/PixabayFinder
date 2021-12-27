import { Dispatch } from "react";
import { setToggler, setImage } from "redux/actions";

export const toggleImagePreviewer = (
  imgUrl: string,
  dispatch: Dispatch<any>
): void => {
  dispatch(setToggler(true));
  dispatch(setImage(imgUrl));
};
