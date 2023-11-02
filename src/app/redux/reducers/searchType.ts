import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = 'Images';

export const searchTypeSlice = createSlice({
  name: 'searchType',
  initialState,
  reducers: {
    setSearchType: (state, action: PayloadAction<string>) =>
      (state = action.payload),
  },
});

export const { setSearchType } = searchTypeSlice.actions;

export default searchTypeSlice.reducer;
export const getSearchType = (state: RootState) => state.searchType;
