import React from 'react';
import useReduxConsts from '../hooks/useReduxConsts';
import { switchLang } from '../functions';
import { localStorageKeys } from '../utils/consts';
import { LangSwitcher } from '../styles';

const Header = () => {
  const lang = localStorage.getItem(localStorageKeys.Lang);
  const { dispatch } = useReduxConsts();

  return (
    <header>
      <LangSwitcher
        defaultValue={lang === 'en' ? 'en' : 'sv'}
        onChange={(e) => switchLang(e, dispatch)}
        name='langList'
      >
        <option value='en'>EN</option>
        <option value='sv'>SV</option>
      </LangSwitcher>
    </header>
  );
};

export default Header;
