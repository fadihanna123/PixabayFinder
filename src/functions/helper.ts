import { localStorageKeys } from '@utils/consts';
import { toast } from 'react-toastify';

const toggleTheme = (
  darkMode: boolean,
  setDarkMode: (darkMode: boolean) => void
) => {
  setDarkMode(!darkMode);
  localStorage.setItem(localStorageKeys.DarkMode, JSON.stringify(!darkMode));
};

const switchLang = (
  e: { target: HTMLSelectElement },
  setLang: (lang: string) => void
) => {
  try {
    localStorage.setItem(localStorageKeys.Lang, e.target.value);

    setLang(e.target.value);
  } catch (err) {
    toast.error((err as Error).message);
  }
};

export { switchLang, toggleTheme };
