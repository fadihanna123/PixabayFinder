/* eslint-disable no-console */
import { AxiosError } from 'axios';

const log = (msg: any, type: logType, isString: boolean = true) => {
  if (!isString) {
    return console.log(msg);
  }

  return console.log(
    `%c ${type === 'error' ? '❌' : type === 'warn' ? '⚠️' : '💭'} ${msg} 😜`,
    'color: pink; font-size: 20px; background-color: #000;'
  );
};

/**
 * Handle errors coming from api requests.
 * @function requestErrorHandler
 * @param { AxiosError } err - Error object
 * @returns { void }
 */
const requestErrorHandler = (err: AxiosError): void => {
  if (err.response) {
    log(err.response.data, 'error', false);
    log(err.response.status, 'error');
    log(err.response.headers, 'error', false);
  } else if (err.request) {
    log(err.request, 'error', false);
  } else {
    log(`Error, ${err.message}`, 'error');
  }

  log(err.config, 'error', false);
};

export { log, requestErrorHandler };
