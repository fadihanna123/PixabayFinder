import axios from 'axios';
import { PixabayBaseURL } from 'utils';

axios.defaults.baseURL = PixabayBaseURL;

/**
 * Request object to manipulate api.
 * @param {{ get: Promise<T | void>, post: Promise<T | void>, put: Promise<T | void>, delete: Promise<T | void> }} Request
 */
export const request = {
  get: async <T>(
    url: string,
    headers?: Record<string, never>
  ): Promise<T | void> => {
    const { data } = await axios.get<T>(`${url}`, headers);
    return data;
  },

  post: async <T>(
    url: string,
    redata: unknown,
    headers?: { headers: Record<string, never> }
  ): Promise<T | void> => {
    const { data } = await axios.post<T>(`${url}`, redata, headers);
    return data;
  },

  put: async <T>(
    url: string,
    redata: unknown,
    headers?: { headers: Record<string, never> }
  ): Promise<T | void> => {
    await axios.put<T>(`${url}`, redata, headers);
  },

  delete: async <T>(
    url: string,
    headers?: { headers: Record<string, never> }
  ): Promise<T | void> => {
    await axios.delete<T>(`${url}`, headers);
  },
};
