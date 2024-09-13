/* eslint-disable no-console */
/**
 * Customize console log.
 * @param { any } msg
 * @param { logType } type
 * @param { isString } [ isString = true ] isString
 * @returns { void }
 * @example log("HI");
 */
const useLog = (msg: any, type: logType, isString: boolean = true): void => {
  if (!isString) {
    return console.log(`ℹ️ ${msg}`);
  }

  return console.log(
    `%c ${type === 'error' ? '❌' : type === 'warn' ? '⚠️' : '💭'} ${msg} 😜`,
    'color: pink; font-size: 20px; background-color: #000;'
  );
};

export default useLog;
