import { Dispatch } from "react";
import { setToggler } from "redux/actions";

export const toggleImagePreviewer = (item: any, dispatch: Dispatch<any>) => {
    dispatch(setToggler(true));
    // dispatch(setImage(imgUrl));
};
