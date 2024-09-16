import { List, SearchFormComp } from '../containers';
import React from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import { Container } from '../styles';
import Header from '../inc/Header';
import Footer from '../inc/Footer';

const Layout: React.FC = () => {
  return (
    <Container>
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
