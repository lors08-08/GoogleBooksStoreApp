import axios, { CreateAxiosDefaults } from 'axios';

import { AXIOS_DEFAULT_CONFIG } from './constants';

const instance = axios.create(AXIOS_DEFAULT_CONFIG as CreateAxiosDefaults);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
