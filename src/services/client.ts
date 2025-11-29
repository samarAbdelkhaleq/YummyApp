import axios from 'axios';
import { getToken, removeToken } from './utils/helperToken';

const BASE_URL = 'https://dummyjson.com/';

const client = axios.create({
  baseURL: BASE_URL,
});
client.interceptors.request.use(
  async (config) => {
    const accessToken = await getToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.request && error.request.status === 401) {
      await removeToken().then(() => {
        //handle logout
      });
    }
    return Promise.reject(error);
  },
);

export default client;
