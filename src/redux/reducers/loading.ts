import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = false;

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
export const getLoading = (state: RootState) => state.loading;
