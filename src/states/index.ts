import { createContext, useContext } from 'react';

export const MyGlobalContext = createContext<GlobalContent>({
  darkMode: false,
  image: '',
  imgList: {
    total: 0,
    totalHits: 0,
    hits: [],
  },
  videoList: {
    total: 0,
    totalHits: 0,
    hits: [],
  },
  lang: '',
  searchForm: { query: 'car', type: 'Images' },
  searchType: 'Images',
  toggler: false,
  mediaLoading: false,
  setToggler: () => {},
  setSearchType: () => {},
  setSearchForm: () => {},
  setMediaLoading: () => {},
  setLang: () => {},
  setImage: () => {},
  setImgList: () => {},
  setDarkMode: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
