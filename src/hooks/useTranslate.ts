import EN from '../translations/en.json';
import SV from '../translations/sv.json';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Handle translations.
 * @function useTranslate
 * @param { string } val
 * @param { string } lang
 * @returns { any } Any
 * @example useTranslate("Start", "en");
 */
const useTranslate = (val: string, lang: string): any => {
  let data: Record<string, string> = {};

  data = lang === 'en' ? EN : lang === 'sv' ? SV : {};
  return data[val];
};

export default useTranslate;
