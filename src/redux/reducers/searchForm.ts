import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: SearchForm = { query: '', type: 'Images' };

export const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState,
  reducers: {
    setSearchForm: (state, action: PayloadAction<SearchForm>) =>
      (state = action.payload),
  },
});

export const { setSearchForm } = searchFormSlice.actions;

export default searchFormSlice.reducer;
export const getSearchForm = (state: RootState) => state.searchForm;
