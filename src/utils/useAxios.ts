import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useCallback } from 'react';
import API_BASE_URL from './constants';

// ================ variables ================ //

export interface HttpParams {
  url: string;
  body?: Object;
  setState?: Function;
  process?: Function;
  success?: Function;
  error?: Function;
  config?: Object;
}

const mainUrl = `${API_BASE_URL}`;
console.log(mainUrl);
const api = axios.create({ baseURL: mainUrl });

// ================ functions ================ //

const getOptions = async () => {
  // const cookies = cookie.parse(document.cookie);
  // const { token } = cookies;
  const token = await AsyncStorage.getItem('@temporada:token');

  const headers = {
    authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  };
  return {
    headers,
  };
};

const useAxios = (...methods: ('get' | 'post' | 'put' | 'delete' | 'patch')[]): Function[] => {
  if (methods.length === 0) throw new TypeError('Methods array is empty, add a method to `useAxios` parameters');

  const functions = methods.map((method) => {
    if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) {
      throw new TypeError(`Invalid method (${method})`);
    }

    const httpRequest = async ({
      url: relativeUrl = '/',
      body = {},

      setState = () => {},
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      process = (data: any) => data,

      success = () => {},

      error = () => {},
      config = {},
    }: HttpParams) => {
      try {
        const { headers } = await getOptions();
        const methodsArguments = {
          get: [{ headers, ...config }],
          post: [body, { headers, ...config }],
          put: [body, { headers, ...config }],
          patch: [body, { headers, ...config }],
          delete: [{ headers, data: body, ...config }],
        };
        const res = await api[method](relativeUrl, ...methodsArguments[method]);

        if (method === 'get') {
          if (setState) {
            setState(await process(res.data.data));
          } else {
            process(res.data.data);
          }
        }

        await success(res, body);
        return res;
      } catch (err) {
        await error(err);

        return err;
      }
    };

    return httpRequest;
  });

  const first = useCallback(functions[0], []);
  const second = useCallback(functions[1], []);
  const third = useCallback(functions[2], []);
  const fourth = useCallback(functions[3], []);

  return [
    ...(first ? [first] : []),
    ...(second ? [second] : []),
    ...(third ? [third] : []),
    ...(fourth ? [fourth] : []),
  ];
};

const checkToken = async (): Promise<boolean> => {
  try {
    const token: string | null = await AsyncStorage.getItem('@temporada:token');
    if (!token) return false;

    const requestHeader = {
      headers: { authorization: `Bearer ${token}` },
    };
    await axios.get(`${mainUrl}user/authenticate`, requestHeader);
    return true;
  } catch {
    return false;
  }
};

export {
  useAxios,
  //   checkToken,
  api,
};