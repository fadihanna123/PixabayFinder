import { useAppDispatch, useAppSelector } from '../redux/app';
import {
  getImage,
  getImgList,
  getMediatLoading,
  getSearchForm,
  getSearchType,
  getToggler,
  getVideoList,
} from '../redux/reducers';

const useReduxConsts = () => {
  const searchForm: SearchForm = useAppSelector(getSearchForm);
  const mediaLoading: boolean = useAppSelector(getMediatLoading);
  const searchType: searchFormType = useAppSelector(getSearchType);
  const toggler: boolean = useAppSelector(getToggler);
  const image: string = useAppSelector(getImage);
  const imgList: IList = useAppSelector(getImgList);
  const videoList: IList = useAppSelector(getVideoList);
  const dispatch = useAppDispatch();

  return {
    searchForm,
    mediaLoading,
    searchType,
    toggler,
    image,
    imgList,
    videoList,
    dispatch,
  };
};

export default useReduxConsts;
