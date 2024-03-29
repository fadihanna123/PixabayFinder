import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: IList = { hits: [], totalHits: 0, total: 0 };

export const imgListSlice = createSlice({
  name: 'imgList',
  initialState,
  reducers: {
    setImgList: (state, action: PayloadAction<IList>) =>
      (state = action.payload),
  },
});

export const { setImgList } = imgListSlice.actions;

export default imgListSlice.reducer;
export const getImgList = (state: RootState) => state.imgList;
