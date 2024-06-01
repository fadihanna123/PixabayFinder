import { List, SearchFormComp } from '../containers';
import React from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import { Container } from '../styles';
import { MainFooter } from '../ui';

const Layout: React.FC = () => {
  return (
    <Container>
      <h1>PixaBay Finder</h1>
      <SearchFormComp />
      <List />
      <MainFooter dataSal='fade'>
        <i>Created by Fadi Hanna</i>
      </MainFooter>
      <ToastContainer transition={Flip} />
    </Container>
  );
};

export default Layout;
