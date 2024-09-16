import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => (state = action.payload),
  },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
export const getLang = (state: RootState) => state.lang;
