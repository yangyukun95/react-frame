import request from './request';

/**
 * request 默认为get请求, 当为get请求时, 传入的参数为params字段
 * 当为非get请求时, 传参字段为 data
 * demo:
 *  request({ url: '/get/demo',params: {} });
 *  request({ url: '/notget/demo', method: 'POST', data: {} });
 */

/**
 * demo
 * @param { demoParam }
 * demoParam       [string]  demoParam
 */

export function getDemo(params) {
  return request({
    url: '/api/getDemo',
    params,
  });
}
