import React, { useState } from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import Footer from '../inc/Footer';
import Header from '../inc/Header';
import { Container } from '@styles/layoutStyles';
import SearchFormComp from '@core/containers/SearchFormComp';
import List from '@core/containers/List';
import { toggleTheme } from '@core/functions/helper';

const Layout: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <Container className={`${darkMode && 'dark-mode'}`}>
      <Header />
      <br />
      <h1>PixaBay Finder</h1>
      <SearchFormComp />
      <List />
      <Footer />
      <button
        className='toggleThemeBtn'
        onClick={() => toggleTheme(darkMode, setDarkMode)}
      >
        {darkMode ? (
          <i className='fa-solid fa-moon moonIcon'></i>
        ) : (
          <i className='fa-solid fa-sun sunIcon'></i>
        )}
      </button>
      <ToastContainer transition={Flip} />
    </Container>
  );
};

export default Layout;
