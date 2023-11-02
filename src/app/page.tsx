'use client';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Flip, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'redux/app';
import { setImgList } from 'redux/reducers/imgList';
import { setLoading } from 'redux/reducers/loading';
import { getSearchForm } from 'redux/reducers/searchForm';
import { setVideoList } from 'redux/reducers/videoList';
import sal from 'sal.js';
import { Container } from 'styles';
import { NextPage } from 'next';
import { getImages, getVideos } from './functions';

// Components
import List from './pages/containers/List';
import SearchForm from 'pages/containers/SearchFormComp';
import MainFooter from 'pages/ui/MainFooter';

const globalHeader: string = 'application/json';

axios.defaults.headers.common['Content-Type'] = globalHeader;

const App: NextPage = () => {
  const searchForm = useAppSelector(getSearchForm);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let isSubscribed: boolean = true;

    sal();

    dispatch(setLoading(true));

    getImages<string>(searchForm.query)
      .then((data: IList) => {
        dispatch(setImgList(data));
      })
      .catch((err: Error) =>
        isSubscribed ? toast.error(err.message, { transition: Flip }) : null
      )
      .finally(() => dispatch(setLoading(false)));

    dispatch(setLoading(true));

    getVideos<string>(searchForm.query)
      .then((data: IList) => {
        if (isSubscribed) {
          dispatch(setVideoList(data));
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
    <>
      <Container m={10} textAlign='center'>
        <h1 data-sal='flip-left'>PixaBay Finder</h1>
        <SearchForm />
        <List />
        <MainFooter dataSal='fade'>
          <i>Created by Fadi Hanna.</i>
        </MainFooter>
      </Container>
    </>
  );
};

export default App;
