import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IList } from 'models';
import { RootState } from 'redux/store';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: IList | null = { total: 0, totalHits: 0, hits: [] };

export const videoListSlice = createSlice({
  name: 'videoList',
  initialState,
  reducers: {
    setVideoList: (state, action: PayloadAction<IList>) => {
      return (state = action.payload);
    },
  },
});

export const { setVideoList } = videoListSlice.actions;

export default videoListSlice.reducer;
export const getVideoList = (state: RootState) => state.videoList;
