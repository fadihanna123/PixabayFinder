import { localStorageKeys } from '@utils/consts';
import { switchLang } from '@functions/helper';
import useReduxConsts from '@hooks/useReduxConsts';
import { MainHeader, LangSwitcher } from '@styles/headerStyles';

const Header = () => {
  const lang = localStorage.getItem(localStorageKeys.Lang);
  const { dispatch } = useReduxConsts();

  return (
    <MainHeader>
      <LangSwitcher
        defaultValue={lang || 'en'}
        onChange={(e) => switchLang(e, dispatch)}
        name='langList'
      >
        <option value='en'>EN</option>
        <option value='sv'>SV</option>
      </LangSwitcher>
    </MainHeader>
  );
};

export default Header;
