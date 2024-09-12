import { useAppDispatch, useAppSelector } from '../redux/app';
import {
  getImage,
  getMediatLoading,
  getSearchForm,
  getSearchType,
  getToggler,
} from '../redux/reducers';

const useReduxConsts = () => {
  const searchForm: SearchForm = useAppSelector(getSearchForm);
  const mediaLoading: boolean = useAppSelector(getMediatLoading);
  const searchType: searchFormType = useAppSelector(getSearchType);
  const toggler: boolean = useAppSelector(getToggler);
  const image: string = useAppSelector(getImage);
  const dispatch = useAppDispatch();

  return {
    searchForm,
    mediaLoading,
    searchType,
    toggler,
    image,
    dispatch,
  };
};

export default useReduxConsts;
