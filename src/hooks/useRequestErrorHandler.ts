import { AxiosError } from 'axios';
import useLog from './useLog';

/**
 * Handle errors coming from api requests.
 * @param { AxiosError } err - Error object
 * @returns { void }
 * @example  requestErrorHandler({ message: "Error" });
 */
const useRequestErrorHandler = (err: AxiosError): void => {
  if (err.response) {
    useLog(err.response.data, 'error', false);
    useLog(err.response.status, 'error');
    useLog(err.response.headers, 'error', false);
  } else if (err.request) {
    useLog(err.request, 'error', false);
  } else {
    useLog(`Error, ${err.message}`, 'error');
  }

  useLog(err.config, 'error', false);
};

export default useRequestErrorHandler;
