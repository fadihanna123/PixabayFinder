import { configureStore } from '@reduxjs/toolkit';

import imageReducer from '../reducers/image';
import searchFormReducer from '../reducers/searchForm';
import searchTypeReducer from '../reducers/searchType';
import togglerReducer from '../reducers/toggler';
import mediaLoadingReducer from '../reducers/mediaLoading';
import imgListReducer from '../reducers/imgList';
import videoListReducer from '../reducers/videoList';
import langReducer from '../reducers/lang';

export const store = configureStore({
  reducer: {
    image: imageReducer,
    toggler: togglerReducer,
    searchForm: searchFormReducer,
    searchType: searchTypeReducer,
    mediaLoading: mediaLoadingReducer,
    imgList: imgListReducer,
    videoList: videoListReducer,
    lang: langReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
