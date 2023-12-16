import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: IList | null = { total: 0, totalHits: 0, hits: [] };

export const videoListSlice = createSlice({
  name: 'videoList',
  initialState,
  reducers: {
    setVideoList: (state, action: PayloadAction<IList>) =>
      (state = action.payload),
  },
});

export const { setVideoList } = videoListSlice.actions;

export default videoListSlice.reducer;
export const getVideoList = (state: RootState) => state.videoList;
