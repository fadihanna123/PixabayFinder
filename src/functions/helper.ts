/* eslint-disable no-console */
import { AxiosError } from 'axios';

/**
 * Handle errors coming from api requests.
 * @function requestErrorHandler
 * @param { AxiosError } err - Error object
 * @returns { void }
 */
const requestErrorHandler = (err: AxiosError): void => {
  if (err.response) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
  } else if (err.request) {
    console.log(err.request);
  } else {
    console.log('Error', err.message);
  }

  console.log(err.config);
};

export { requestErrorHandler };
