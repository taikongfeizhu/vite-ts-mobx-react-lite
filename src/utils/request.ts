import { message } from 'antd';
import axios from 'axios';
import config from '../../config';

// 创建axios实例
const service = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 50000,
  withCredentials: false, // 跨域携带cookie
  xsrfCookieName: 'xsrf-token', //当创建实例的时候配置默认配置,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      message.error(
        `发送request失败${JSON.stringify(response)},方法名：${
          response.request.responseURL
        }`,
      );
      return Promise.reject(new Error('网络异常，请稍后重试'));
    }
    const res = response.data;
    return res;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
