import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { PixabayBaseURL, PixabayKey } from '@utils/envsVariables';

// Components
import { localStorageKeys } from '@utils/consts';
import Layout from '@app/Layout';
import useAPI from '../hooks/useAPI';
import useLog from '../hooks/useLog';
import useReduxConsts from '../hooks/useReduxConsts';
import { setImgList, setVideoList } from '../redux';
import { setLang } from '../redux/reducers/lang';

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
    const langFromStorage = localStorage.getItem(localStorageKeys.Lang);

    if (langFromStorage === '') {
      dispatch(setLang('en'));
    }

    if (langFromStorage === null) {
      localStorage.setItem(localStorageKeys.Lang, 'en');
    }

    dispatch(setLang(langFromStorage!));
  }, []);

  useEffect(() => {
    dispatch(setImgList(imgData!));
    dispatch(setVideoList(videoData!));
  }, [imgData]);

  return <Layout />;
};

export default App;
