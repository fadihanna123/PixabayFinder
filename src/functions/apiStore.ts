import { request } from 'api';
import { IList } from 'models';
import { PixabayKey } from 'utils/envs';

export const getImages = async (imageVal: string): Promise<any> => {
    const endPoint: string = `?key=${PixabayKey}&q=${imageVal}`;
    return request.get<IList[]>(endPoint);
};

export const getVideos = async (val: string): Promise<any> => {
    const endPoint: string = `videos/?key=${PixabayKey}&q=${val}`;
    return await request.get<IList>(endPoint);
};
