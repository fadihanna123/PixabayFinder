import { localStorageKeys } from '@utils/consts';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setLang } from '../redux/reducers/lang';

const switchLang = (e: { target: HTMLSelectElement }, dispatch: Dispatch) => {
  try {
    localStorage.setItem(localStorageKeys.Lang, e.target.value);

    dispatch(setLang(e.target.value));
  } catch (err) {
    toast.error((err as Error).message);
  }
};

export { switchLang };
