import React from 'react';
import MainFooter from '@ui/MainFooter';
import useTranslate from '../hooks/useTranslate';
import { useGlobalContext } from '@core/states';
import { toggleTheme } from '@core/functions/helper';

const Footer = () => {
  const { lang, darkMode, setDarkMode } = useGlobalContext();

  return (
    <MainFooter dataSal='fade'>
      <button
        className='toggleThemeBtn'
        onClick={() => toggleTheme(darkMode, setDarkMode)}
      >
        {!darkMode ? (
          <i className='fa-solid fa-moon moonIcon'></i>
        ) : (
          <i className='fa-solid fa-sun sunIcon'></i>
        )}
      </button>
      <i>{useTranslate('FOOTER_TXT', lang)} Fadi Hanna </i>
    </MainFooter>
  );
};

export default Footer;
