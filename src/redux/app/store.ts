import { configureStore } from '@reduxjs/toolkit';

import imageReducer from '../reducers/image';
import imgListReducer from '../reducers/imgList';
import loadingReducer from '../reducers/loading';
import searchFormReducer from '../reducers/searchForm';
import searchTypeReducer from '../reducers/searchType';
import togglerReducer from '../reducers/toggler';
import videoListReducer from '../reducers/videoList';
import mediaLoadingReducer from '../reducers/mediaLoading';

export const store = configureStore({
  reducer: {
    image: imageReducer,
    imgList: imgListReducer,
    toggler: togglerReducer,
    loading: loadingReducer,
    searchForm: searchFormReducer,
    searchType: searchTypeReducer,
    videoList: videoListReducer,
    mediaLoading: mediaLoadingReducer,
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
