import Vue from 'vue';
import {nt} from './native';

Vue.prototype.login = function () {
  let device = sessionStorage.getItem('device');
  // 用户未登录
  if (device === '3') {
    let userStatus = sessionStorage.getItem('userStatus');
    if (userStatus === null || userStatus === undefined || userStatus === 'notLogin') {
      sessionStorage.setItem('rurl', window.location.href);
      window.location.href = sessionStorage.getItem('baseUrl') + '/login.html';
      return null;
    }
  } else {
    let token = sessionStorage.getItem('token');
    if (token === 'null' || token === undefined) {
      nt.toLogin();
      return null;
    }
  }
  return true;
};

Vue.prototype.toPro = function () {
  if (sessionStorage.getItem('device') !== '3') {
    window._LZLH.toProList('{"cb":""}');
  } else {
    alert('没有touch项目列表页面!');
  }
};

Vue.prototype.getToken = function (func) {
  // 4.发起ajax
  if (sessionStorage.getItem('device') !== '3') { // 浏览器
    nt.getToken({cb: func});
  } else {
    func('xxxx');
  }
};

export {Vue};
