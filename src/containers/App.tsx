import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { PixabayBaseURL, PixabayKey } from '../utils';

// Components
import { Layout } from '../app';
import axios from 'axios';
import useLog from '../hooks/useLog';
import { setImgList, setVideoList } from '../redux';
import useReduxConsts from '../hooks/useReduxConsts';
import useAPI from '../hooks/useAPI';
import { sessionStorageKeys } from '../utils/consts';
import lang, { setLang } from '../redux/reducers/lang';

const App = () => {
  const globalHeader: string = 'application/json';

  axios.defaults.baseURL = PixabayBaseURL;
  axios.defaults.headers.common['Content-Type'] = globalHeader;

  const { dispatch, searchForm } = useReduxConsts();
  const imagesEndPoint: string = `?key=${PixabayKey}&q=${searchForm.query}`;
  const videosEndPoint: string = `videos/?key=${PixabayKey}&q=${searchForm.query}`;
  const { data: imgData } = useAPI(imagesEndPoint, 'get', searchForm);
  const { data: videoData } = useAPI(videosEndPoint, 'get', searchForm);

  if (!PixabayKey) {
    toast.error('Missing apiKey? Add it and restart the app!');
    useLog('Missing apiKey? Add it and restart the app!', 'error');
  }

  useEffect(() => {
    const lang = sessionStorage.getItem(sessionStorageKeys.Lang);

    if (lang === '') {
      dispatch(setLang('en'));
    }

    if (lang === null || undefined) {
      sessionStorage.setItem(sessionStorageKeys.Lang, 'en');
    }

    dispatch(setLang(lang!));
  }, [lang]);

  useEffect(() => {
    dispatch(setImgList(imgData!));
    dispatch(setVideoList(videoData!));
  }, [imgData]);

  return <Layout />;
};

export default App;
