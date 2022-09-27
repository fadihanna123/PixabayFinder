import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export const { setImage } = imageSlice.actions;

export default imageSlice.reducer;
export const getImage = (state: RootState) => state.image;
