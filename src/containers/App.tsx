import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { PixabayBaseURL, PixabayKey } from '@utils/envsVariables';

// Components
import { localStorageKeys } from '@utils/consts';
import Layout from '@app/Layout';
import useAPI from '../hooks/useAPI';
import useLog from '../hooks/useLog';
import { MyGlobalContext } from '@core/states';

const App = () => {
  const globalHeader: string = 'application/json';

  axios.defaults.baseURL = PixabayBaseURL;
  axios.defaults.headers.common['Content-Type'] = globalHeader;

  const [searchType, setSearchType] = useState<searchFormType>('Images');
  const [toggler, setToggler] = useState<boolean>(false);
  const [mediaLoading, setMediaLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');
  const [lang, setLang] = useState<string>('');
  const [searchForm, setSearchForm] = useState<SearchForm>({
    query: 'car',
    type: 'Images',
  });
  const [imgList, setImgList] = useState<IList>({
    total: 0,
    totalHits: 0,
    hits: [],
  });
  const [videoList, setVideoList] = useState<IList>({
    total: 0,
    totalHits: 0,
    hits: [],
  });
  const imagesEndPoint: string = `?key=${PixabayKey}&q=${searchForm!.query}`;
  const videosEndPoint: string = `videos/?key=${PixabayKey}&q=${searchForm!.query}`;
  const { data: imgData } = useAPI(imagesEndPoint, 'get', searchForm);
  const { data: videoData } = useAPI(videosEndPoint, 'get', searchForm);

  if (!PixabayKey) {
    toast.error('Missing apiKey? Add it and restart the app!');
    useLog('Missing apiKey? Add it and restart the app!', 'error');
  }

  useEffect(() => {
    let langFromStorage = localStorage.getItem(localStorageKeys.Lang);

    if (!langFromStorage) {
      localStorage.removeItem(localStorageKeys.Lang);
      localStorage.setItem(localStorageKeys.Lang, 'en');
      langFromStorage = 'en';
    }

    setLang(langFromStorage!);
  }, []);

  useEffect(() => {
    setImgList(imgData!);
    setVideoList(videoData!);
  }, [imgData]);

  return (
    <MyGlobalContext.Provider
      value={{
        darkMode,
        image,
        imgList,
        videoList,
        lang,
        searchForm,
        searchType,
        toggler,
        mediaLoading,
        setToggler,
        setSearchType,
        setSearchForm,
        setMediaLoading,
        setLang,
        setImage,
        setImgList,
        setDarkMode,
      }}
    >
      <Layout />
    </MyGlobalContext.Provider>
  );
};

export default App;
