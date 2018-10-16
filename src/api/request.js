import axios from 'axios';
import { message } from 'antd';
import config from 'Config';

export default function request(options) {
  const { headers } = options;
  const axiosReq = axios.create({
    timeout: 30000,
    baseURL: config.baseURL,
  });

  axiosReq.interceptors.request.use((params) => {
    if (headers) {
      params.headers = {
        ...params.headers,
        ...headers,
      };
    }

    if (window.location.pathname.includes('/OAuth') < 0) {
      // 非授权页, 将token 加到请求头中
      const { token } = sessionStorage;
      if (token) {
        params.headers = {
          ...params.headers,
          token,
        };
      }
    }
    return params;
  });

  axiosReq.interceptors.response.use(response => response.data);

  return axiosReq(options)
    .catch((error) => {
      if (error) {
        message.error(`error: ${error.message}`);
        console.log('request error', error);
      }
    });
}
