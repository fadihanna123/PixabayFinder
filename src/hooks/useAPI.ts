import axios, { AxiosError, HeadersDefaults } from 'axios';
import { useEffect, useState } from 'react';

const useAPI = (
  endPoint: string,
  method: METHODS = 'get',
  changeParameter?: any,
  headers?: HeadersDefaults,
  body?: any
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IList | null>(null);
  const [error, setError] = useState<string>('');

  const getData = async () => {
    setLoading(true);

    axios[method](endPoint, headers, JSON.parse(body ? body : null))
      .then((res) => {
        setData(res.data);
      })
      .catch((err: AxiosError) => {
        if (err instanceof AxiosError) {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [changeParameter]);

  return {
    loading,
    data,
    error,
  };
};

export default useAPI;
