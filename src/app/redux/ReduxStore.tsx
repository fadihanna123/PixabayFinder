'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/app';

const ReduxStore = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxStore;
