/* eslint-disable no-console */
import { request } from 'api';
import { AxiosError } from 'axios';
import { IList } from 'models';
import { PixabayKey } from 'utils';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

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

/**
 * Get imagelist from api.
 * @async
 * @function getImages
 * @param { string } imageVal - Image value
 * @returns { Promise<any> } Promise contains images array.
 */
export const getImages = async <T>(imageVal: T): Promise<any> => {
  const endPoint: string = `?key=${PixabayKey}&q=${imageVal}`;

  try {
    return await request.get<IList[]>(endPoint);
  } catch (err) {
    requestErrorHandler(err as AxiosError);
  }
};

/**
 * Get video list from api.
 * @async
 * @function getVideos
 * @param { string } val - Video value
 * @returns { Promise<any> } Promise contains video object
 */
export const getVideos = async <T>(val: T): Promise<any> => {
  const endPoint: string = `videos/?key=${PixabayKey}&q=${val}`;

  try {
    return await request.get<IList>(endPoint);
  } catch (err) {
    requestErrorHandler(err as AxiosError);
  }
};
