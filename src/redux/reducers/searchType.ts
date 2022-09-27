import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = 'Images';

export const searchTypeSlice = createSlice({
  name: 'searchType',
  initialState,
  reducers: {
    setSearchType: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export const { setSearchType } = searchTypeSlice.actions;

export default searchTypeSlice.reducer;
export const getSearchType = (state: RootState) => state.searchType;
