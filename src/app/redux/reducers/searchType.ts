import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState = 'Images' as searchFormType;

export const searchTypeSlice = createSlice({
  name: 'searchType',
  initialState,
  reducers: {
    setSearchType: (state, action: PayloadAction<searchFormType>) =>
      (state = action.payload),
  },
});

export const { setSearchType } = searchTypeSlice.actions;

export default searchTypeSlice.reducer;
export const getSearchType = (state: RootState) => state.searchType;
