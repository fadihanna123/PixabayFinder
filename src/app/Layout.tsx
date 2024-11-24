import React from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import { List, SearchFormComp } from '../containers';
import Footer from '../inc/Footer';
import Header from '../inc/Header';
import { Container } from '../styles';

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
