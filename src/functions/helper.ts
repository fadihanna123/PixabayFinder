import { Dispatch } from 'redux';
import { setLang } from '../redux/reducers/lang';
import { sessionStorageKeys } from '../utils/consts';
import { toast } from 'react-toastify';

const switchLang = (e: { target: HTMLSelectElement }, dispatch: Dispatch) => {
  try {
    sessionStorage.setItem(sessionStorageKeys.Lang, e.target.value);

    dispatch(setLang(e.target.value));
  } catch (err) {
    toast.error((err as Error).message);
  }
};

export { switchLang };
