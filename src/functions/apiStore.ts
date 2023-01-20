import { request } from 'api';
import { IList } from 'models';
import { PixabayKey } from 'utils';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get imagelist from api.
 *
 * @param {string} imageVal - Image value
 * @returns Promise contains images array.
 */

export const getImages = async <T>(imageVal: T): Promise<any> => {
  const endPoint: string = `?key=${PixabayKey}&q=${imageVal}`;
  return request.get<IList[]>(endPoint);
};

/**
 * Get video list from api.
 *
 * @param {string} val - Video value
 * @returns Promise contains video object
 */

export const getVideos = async <T>(val: T): Promise<any> => {
  const endPoint: string = `videos/?key=${PixabayKey}&q=${val}`;
  return await request.get<IList>(endPoint);
};
