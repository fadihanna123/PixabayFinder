'use client';
import React, { useEffect } from 'react';
import { Flip, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'redux/app';
import { setImgList } from 'redux/reducers/imgList';
import { getLoading, setLoading } from 'redux/reducers/loading';
import { getSearchForm } from 'redux/reducers/searchForm';
import { setVideoList } from 'redux/reducers/videoList';
import sal from 'sal.js';
import { Container } from 'styles';
import { getImages, getVideos } from 'functions';
import { PacmanLoader } from 'react-spinners';

// Components
import List from './pages/containers/List';
import SearchForm from 'pages/containers/SearchFormComp';
import MainFooter from 'pages/ui/MainFooter';

const App = () => {
  const loading = useAppSelector(getLoading);
  const searchForm = useAppSelector(getSearchForm);

  const dispatch = useAppDispatch();

  useEffect(() => {
    sal();

    dispatch(setLoading(true));
    // eslint-disable-next-line no-console
    console.log(searchForm.query);
    getImages<string>(searchForm.query)
      .then((imagesData) => {
        dispatch(setImgList(imagesData));
      })
      .catch((err) => toast.error(err.message, { transition: Flip }));

    getVideos<string>(searchForm.query)
      .then((videosData) => {
        dispatch(setVideoList(videosData));
        dispatch(setLoading(false));
      })
      .catch((err) => toast.error(err.message, { transition: Flip }));
  }, []);

  if (loading) {
    return (
      <PacmanLoader
        cssOverride={{ margin: '0 auto' }}
        loading={loading}
        color='#36d7b7'
      />
    );
  }

  return (
    <Container m={10} textAlign='center'>
      <h1>PixaBay Finder</h1>
      <SearchForm />
      <List />
      <MainFooter dataSal='fade'>
        <i>Created by Fadi Hanna.</i>
      </MainFooter>
    </Container>
  );
};

export default App;
