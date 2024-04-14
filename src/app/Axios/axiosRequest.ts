import { AxiosRequestConfig, AxiosResponse } from 'axios';

import axios from './instance';

export function axiosRequest<T = unknown, R = any>(
  url: string,
  props?: T,
  config?: AxiosRequestConfig | undefined,
  type: 'post' | 'get' = 'get',
): Promise<AxiosResponse<R>> {
  return axios[type](url, props, config);
}
