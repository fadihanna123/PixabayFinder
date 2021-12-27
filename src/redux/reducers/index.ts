import { combineReducers } from "redux";

import { imageReducer } from "./image";
import { imgListReducer } from "./imgList";
import { loadingReducer } from "./loading";
import { searchFormReducer } from "./searchForm";
import { searchTypeReducer } from "./searchType";
import { togglerReducer } from "./toggler";
import { videoListReducer } from "./videoList";

export const allReducers = combineReducers({
  togglerReducer,
  imageReducer,
  searchFormReducer,
  loadingReducer,
  searchTypeReducer,
  imgListReducer,
  videoListReducer,
});
