import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = false;

export const mediaLoadingSlice = createSlice({
  name: 'mediaLoading',
  initialState,
  reducers: {
    setMediaLoading: (state, action: PayloadAction<boolean>) =>
      (state = action.payload),
  },
});

export const { setMediaLoading } = mediaLoadingSlice.actions;

export default mediaLoadingSlice.reducer;
export const getMediatLoading = (state: RootState) => state.mediaLoading;
