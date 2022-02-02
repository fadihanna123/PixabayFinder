import { request } from 'api';
import { IList } from 'typings';
import { PixabayKey } from 'utils/envs';

export const getImages = async (imageVal: string): Promise<any> => {
  const endPoint = `?key=${PixabayKey}&q=${imageVal}`;
  return request.get<IList[]>(endPoint);
};

export const getVideos = async (val: string): Promise<any> => {
  const endPoint = `/videos?key=${PixabayKey}&q=${val}`;
  return await request.get<IList>(endPoint);
};
