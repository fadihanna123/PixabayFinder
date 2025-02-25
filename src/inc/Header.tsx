import { localStorageKeys } from '@utils/consts';
import { switchLang } from '@functions/helper';
import useReduxConsts from '@hooks/useReduxConsts';
import { LangSwitcher } from '@core/styles/headerStyles';

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
