import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchForm } from 'models';
import { RootState } from 'redux/store';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: SearchForm = { query: '', type: 'Images' };

export const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState,
  reducers: {
    setSearchForm: (state, action: PayloadAction<SearchForm>) => {
      return (state = action.payload);
    },
  },
});

export const { setSearchForm } = searchFormSlice.actions;

export default searchFormSlice.reducer;
export const getSearchForm = (state: RootState) => state.searchForm;
