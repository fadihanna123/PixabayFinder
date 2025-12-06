import React from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import Footer from '../inc/Footer';
import Header from '../inc/Header';
import List from '@core/containers/List';
import { useGlobalContext } from '@core/states';
import SearchSection from '@core/containers/SearchSection';

const Layout: React.FC = () => {
  const { darkMode } = useGlobalContext();

  return (
    <section className={`container ${darkMode && 'dark-mode'}`}>
      <Header />
      <br />
      <SearchSection />
      <List />
      <Footer />
      <ToastContainer transition={Flip} />
    </section>
  );
};

export default Layout;
