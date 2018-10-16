
// 服务器地址
let baseURL = 'http://192.168.3.2:8080';

// 生产环境配置
if (process.env.NODE_ENV === 'production') {
  baseURL = '';
}

export default {
  baseURL,
};

