import React from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import Footer from '../inc/Footer';
import Header from '../inc/Header';
import { Container } from '@styles/layoutStyles';
import List from '@core/containers/List';
import { useGlobalContext } from '@core/states';
import SearchSection from '@core/containers/SearchSection';

const Layout: React.FC = () => {
  const { darkMode } = useGlobalContext();

  return (
    <Container className={`${darkMode && 'dark-mode'}`}>
      <Header />
      <br />
      <SearchSection />
      <List />
      <Footer />
      <ToastContainer transition={Flip} />
    </Container>
  );
};

export default Layout;
