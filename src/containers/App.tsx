import React, { useEffect } from 'react';
import { Flip, toast } from 'react-toastify';
import { setImgList } from '../redux/reducers/imgList';
import { setLoading } from '../redux/reducers/loading';
import { setVideoList } from '../redux/reducers/videoList';
import sal from 'sal.js';
import { PacmanLoader } from 'react-spinners';
import { setMediaLoading } from '../redux/reducers';
import { PixabayKey } from '../utils';
import { getImages, getVideos, log } from '../functions';

// Components
import { Layout } from '../app';
import useReduxConsts from '../hooks/useReduxConsts';

const App = () => {
  const { searchForm, loading, dispatch } = useReduxConsts();

  if (!PixabayKey) {
    toast.error('Missing apiKey? Add it and restart the app!');
    log('Missing apiKey? Add it and restart the app!', 'error');
  }

  useEffect(() => {
    let mounted = true;
    sal();

    dispatch(setLoading(true));
    dispatch(setMediaLoading(true));

    getImages<string>(searchForm.query)
      .then((imagesData) => {
        if (mounted) {
          dispatch(setImgList(imagesData));
        }
        dispatch(setMediaLoading(false));
      })
      .catch((err) => toast.error(err.message, { transition: Flip }));

    getVideos<string>(searchForm.query)
      .then((videosData) => {
        if (mounted) {
          dispatch(setVideoList(videosData));
          dispatch(setMediaLoading(false));
        }
      })
      .catch((err) => toast.error(err.message, { transition: Flip }));

    dispatch(setLoading(false));

    return () => {
      mounted = false;
    };
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
