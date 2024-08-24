import { useAppDispatch, useAppSelector } from '../redux/app';
import {
  getImage,
  getImgList,
  getLoading,
  getMediatLoading,
  getSearchForm,
  getSearchType,
  getToggler,
  getVideoList,
} from '../redux/reducers';

const useReduxConsts = () => {
  const loading = useAppSelector(getLoading);
  const searchForm: SearchForm = useAppSelector(getSearchForm);
  const imgList: IList = useAppSelector(getImgList);
  const videoList = useAppSelector(getVideoList);
  const mediaLoading: boolean = useAppSelector(getMediatLoading);
  const searchType: searchFormType = useAppSelector(getSearchType);
  const toggler: boolean = useAppSelector(getToggler);
  const image: string = useAppSelector(getImage);
  const dispatch = useAppDispatch();

  return {
    loading,
    searchForm,
    imgList,
    videoList,
    mediaLoading,
    searchType,
    toggler,
    image,
    dispatch,
  };
};

export default useReduxConsts;
