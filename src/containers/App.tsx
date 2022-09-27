import Layout from 'app/Layout';
import axios from 'axios';
import { getImages, getVideos } from 'functions';
import { IList } from 'models';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flip, toast } from 'react-toastify';
import { setImgList } from 'redux/reducers/imgList';
import { setLoading } from 'redux/reducers/loading';
import { getSearchForm } from 'redux/reducers/searchForm';
import { setVideoList } from 'redux/reducers/videoList';
import sal from 'sal.js';

const globalHeader: string = 'application/json';

axios.defaults.headers.common['Content-Type'] = globalHeader;

const App: React.FC = () => {
  const searchForm = useSelector(getSearchForm);

  const dispatch = useDispatch();

  useEffect(() => {
    let isSubscribed: boolean = true;

    sal();

    getImages(searchForm.query)
      .then((data: IList) => {
        if (isSubscribed) {
          dispatch(setLoading(true));
          dispatch(setImgList(data));
        } else {
          return null;
        }
      })
      .catch((err: Error) =>
        isSubscribed
          ? toast.error((err as Error).message, { transition: Flip })
          : null
      )
      .finally(() => (isSubscribed ? dispatch(setLoading(false)) : null));

    getVideos(searchForm.query)
      .then((data: IList) => {
        if (isSubscribed) {
          dispatch(setLoading(true));
          dispatch(setVideoList(data));
        } else {
          return null;
        }
      })
      .catch((err: Error) =>
        isSubscribed
          ? toast.error((err as Error).message, { transition: Flip })
          : null
      )
      .finally(() => (isSubscribed ? dispatch(setLoading(false)) : null));

    return () => {
      isSubscribed = false;
    };
  }, [dispatch, searchForm.query]);

  return <Layout />;
};

export default App;
