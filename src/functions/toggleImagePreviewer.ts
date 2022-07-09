import { HitsOfList } from "models";
import { Dispatch } from "react";
import { setImage, setToggler } from "redux/actions";

export const toggleImagePreviewer = (
    item: HitsOfList,
    dispatch: Dispatch<any>
) => {
    dispatch(setToggler(true));
    dispatch(setImage(item.webformatURL));
};
