import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) =>
      (state = action.payload),
  },
});

export const { setImage } = imageSlice.actions;

export default imageSlice.reducer;
export const getImage = (state: RootState) => state.image;
