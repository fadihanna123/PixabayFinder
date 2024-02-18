import React, { useEffect } from 'react';
import { Flip, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../redux/app';
import { setImgList } from '../redux/reducers/imgList';
import { getLoading, setLoading } from '../redux/reducers/loading';
import { getSearchForm } from '../redux/reducers/searchForm';
import { setVideoList } from '../redux/reducers/videoList';
import sal from 'sal.js';
import { PacmanLoader } from 'react-spinners';
import { setMediaLoading } from '../redux/reducers';
import { PixabayKey } from 'utils';
import { getImages, getVideos, log } from '../functions';

// Components
import { Layout } from '../app';

const App = () => {
  if (!PixabayKey) {
    toast.error('Missing apiKey? Add it and restart the app!');
    log('Missing apiKey? Add it and restart the app!', 'error');
  }

  const loading = useAppSelector(getLoading);
  const searchForm = useAppSelector(getSearchForm);

  const dispatch = useAppDispatch();

  useEffect(() => {
    sal();

    dispatch(setLoading(true));
    dispatch(setMediaLoading(true));

    getImages<string>(searchForm.query)
      .then((imagesData) => {
        dispatch(setImgList(imagesData));
        dispatch(setMediaLoading(false));
      })
      .catch((err) => toast.error(err.message, { transition: Flip }));

    getVideos<string>(searchForm.query)
      .then((videosData) => {
        dispatch(setVideoList(videosData));
        dispatch(setMediaLoading(false));
      })
      .catch((err) => toast.error(err.message, { transition: Flip }));

    dispatch(setLoading(false));
  }, [searchForm]);

  if (loading) {
    return (
      <PacmanLoader
        cssOverride={{ margin: '0 auto' }}
        loading={loading}
        color='#36d7b7'
      />
    );
  }

  return <Layout />;
};

export default App;
