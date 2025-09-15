import React from 'react';
import MainFooter from '@ui/MainFooter';
import useTranslate from '../hooks/useTranslate';
import { useGlobalContext } from '@core/states';

const Footer = () => {
  const { lang } = useGlobalContext();

  return (
    <MainFooter dataSal='fade'>
      <i>{useTranslate('FOOTER_TXT', lang)} Fadi Hanna</i>
    </MainFooter>
  );
};

export default Footer;
