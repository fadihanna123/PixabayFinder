import React from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import Footer from '../inc/Footer';
import Header from '../inc/Header';
import { Container } from '@styles/layoutStyles';
import SearchFormComp from '@core/containers/SearchFormComp';
import List from '@core/containers/List';
import { useGlobalContext } from '@core/states';

const Layout: React.FC = () => {
  const { darkMode } = useGlobalContext();

  return (
    <Container className={`${darkMode && 'dark-mode'}`}>
      <Header />
      <br />
      <h1>PixaBay Finder</h1>
      <SearchFormComp />
      <List />
      <Footer />
      <ToastContainer transition={Flip} />
    </Container>
  );
};

export default Layout;
