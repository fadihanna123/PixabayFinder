import { localStorageKeys } from '@utils/consts';
import { toast } from 'react-toastify';

// toggleTheme: toggle the theme between light and dark
export const toggleTheme = (
  darkMode: boolean,
  setDarkMode: (darkMode: boolean) => void
) => {
  setDarkMode(!darkMode);
  localStorage.setItem(localStorageKeys.DarkMode, JSON.stringify(!darkMode));
};

// switchLang: switch the language of the app
export const switchLang = (
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
