import { localStorageKeys } from '@utils/consts';
import { switchLang } from '@functions/helper';
import { MainHeader, LangSwitcher } from '@styles/headerStyles';
import { useGlobalContext } from '@core/states';

const Header = () => {
  const lang = localStorage.getItem(localStorageKeys.Lang);
  const { setLang } = useGlobalContext();

  return (
    <MainHeader>
      <LangSwitcher
        defaultValue={lang || 'en'}
        onChange={(e) => switchLang(e, setLang)}
        name='langList'
      >
        <option value='en'>EN</option>
        <option value='sv'>SV</option>
      </LangSwitcher>
    </MainHeader>
  );
};

export default Header;
