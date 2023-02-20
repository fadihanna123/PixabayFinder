import axios from 'axios';
import SearchForm from 'containers/SearchFormComp';
import { getImages, getVideos } from 'functions';
import { IList } from 'models';
import { useEffect } from 'react';
import { Flip, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'redux/app';
import { setImgList } from 'redux/reducers/imgList';
import { setLoading } from 'redux/reducers/loading';
import { getSearchForm } from 'redux/reducers/searchForm';
import { setVideoList } from 'redux/reducers/videoList';
import sal from 'sal.js';
import { Container } from 'styles';
import MainFooter from 'ui/MainFooter';
import React from 'react';

import List from './List';

const globalHeader: string = 'application/json';

axios.defaults.headers.common['Content-Type'] = globalHeader;

const App: React.FC = () => {
  const searchForm = useAppSelector(getSearchForm);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let isSubscribed: boolean = true;

    sal();

    getImages<string>(searchForm.query)
      .then((data: IList) => {
        if (isSubscribed) {
          dispatch(setLoading(true));
          dispatch(setImgList(data));
          dispatch(setLoading(false));
        } else {
          return null;
        }
      })
      .catch((err: Error) =>
        isSubscribed ? toast.error(err.message, { transition: Flip }) : null
      )
      .finally(() => (isSubscribed ? dispatch(setLoading(false)) : null));

    getVideos<string>(searchForm.query)
      .then((data: IList) => {
        if (isSubscribed) {
          dispatch(setLoading(true));
          dispatch(setVideoList(data));
          dispatch(setLoading(false));
        } else {
          return null;
        }
      })
      .catch((err: Error) =>
        isSubscribed ? toast.error(err.message, { transition: Flip }) : null
      )
      .finally(() => (isSubscribed ? dispatch(setLoading(false)) : null));

    return () => {
      isSubscribed = false;
    };
  }, [dispatch, searchForm.query]);

  return (
    <Container m={10} textAlign='center'>
      <h1 data-sal='flip-left'>PixaBay Finder</h1>
      <SearchForm />
      <List />
      <MainFooter dataSal='fade'>
        <i>Created by Fadi Hanna.</i>
      </MainFooter>
    </Container>
  );
};

export default App;
