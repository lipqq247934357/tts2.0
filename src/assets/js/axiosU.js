var axios = require('axios');
// axios 配置
axios.defaults.timeout = 15000;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// TODO 增加默认的拦截，比如如果返回正常，返回码是403跳登录，如果返回错误，提示什么之类的
axios.defaults.transformRequest = [function (data, headers) {
  headers.token = sessionStorage.getItem('token');
  return data;
}];
module.exports = axios;
