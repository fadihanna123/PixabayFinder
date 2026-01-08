import { localStorageKeys } from '@utils/consts';
import { switchLang } from '@functions/helper';
import { useGlobalContext } from '@core/states';

const Header = () => {
  const lang = localStorage.getItem(localStorageKeys.Lang);
  const { setLang } = useGlobalContext();

  return (
    <header className='mainHeader'>
      <h1 className='m-2'>Pixabay Finder</h1>
      <select
        className='langSwitcher'
        defaultValue={lang || 'en'}
        onChange={(e) => switchLang(e, setLang)}
        name='langList'
      >
        <option value='en'>EN</option>
        <option value='sv'>SV</option>
      </select>
    </header>
  );
};

export default Header;
