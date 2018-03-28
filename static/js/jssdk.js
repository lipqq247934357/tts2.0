/*eslint-disable */
// jssdk
var nt = {
  key: function () {
    return '_cb_' + new Date().getTime();
  },
  cb: function (par) {
    par = par || {};
    if (typeof (par.cb) !== 'function') {
      par.cb = function () {
      }
    }
    var key = this.key();
    window.NT_HANDLE = window.NT_HANDLE || [];
    var func = par.cb;
    window.NT_HANDLE[key] = function (data) {
      func(data);
      window.NT_HANDLE[key] = null;
    }
    par.cb = 'window.NT_HANDLE.' + key;
    return JSON.stringify(par);
  },
  toLogin(par) {
    _LZLH.toLogin(this.cb(par))
  },
  getToken(par) {
    _LZLH.getToken(this.cb(par))
  }
};

// 获取设备信息
(function () {
  var u = navigator.userAgent.toLowerCase();
  var isApp = window._LZLH !== undefined;
  var device = 3;
  // proble
  if (u.indexOf('micromessenger') !== -1) {
    device = 4;
  }

  var tokens = ['iphone', 'ipod', 'ipad'];
  for (var i = 0; i < tokens.length; i++) {
    if (u.indexOf(tokens[i]) > -1) {
      device = isApp ? 1 : 3;
    }
  }
  tokens = ['linux', 'android'];
  for (var i = 0; i < tokens.length; i++) {
    if (u.indexOf(tokens[i]) > -1) {
      device = isApp ? 2 : 3;
    }
  }
  // 设置设备类型
  sessionStorage.setItem('device', device);
})();


function getToken(data) {
  sessionStorage.setItem('token', data);
}

// 设置token
if (sessionStorage.getItem('device') === '1' || sessionStorage.getItem('device') === '2') {
  nt.getToken({cb: getToken});
}
