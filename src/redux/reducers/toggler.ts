import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = false;

export const togglerSlice = createSlice({
  name: 'toggler',
  initialState,
  reducers: {
    setToggler: (state, action: PayloadAction<boolean>) =>
      (state = action.payload),
  },
});

export const { setToggler } = togglerSlice.actions;

export default togglerSlice.reducer;
export const getToggler = (state: RootState) => state.toggler;
