import React from 'react';
import MainFooter from '@ui/MainFooter';
import useTranslate from '../hooks/useTranslate';
import useReduxConsts from '../hooks/useReduxConsts';

const Footer = () => {
  const { lang } = useReduxConsts();

  return (
    <MainFooter dataSal='fade'>
      <i>{useTranslate('FOOTER_TXT', lang)} Fadi Hanna</i>
    </MainFooter>
  );
};

export default Footer;
