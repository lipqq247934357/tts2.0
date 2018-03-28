/*eslint-disable */
let nt = {
  key() {
    return '_cb_' + new Date().getTime();
  },
  cb(par) {
    par = par || {};
    if (typeof (par.cb) !== 'function') {
      par.cb = function () {
      }
    }
    let key = this.key();
    window.NT_HANDLE = window.NT_HANDLE || [];
    let func = par.cb;
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
  },
  toShare(par) {
    _LZLH.toShare(JSON.stringify(par))
  },
  toProList() {
    _LZLH.toProList('{"cb":""}')
  },
  toCloseWindow() {
    _LZLH.toCloseWindow(this.cb());
  },
  toCopy(params) {
    _LZLH.toCopy(JSON.stringify(params));

  }
};

let lzlh = {
  isApp() {
    return sessionStorage.getItem('device') === '1' || sessionStorage.getItem('device') === '2'
  },
  toLogin(par) {
    this.isApp() ? nt.toLogin(par) : function () {
      // TODO 去登陆
      alert('去登陆');
    }();
  },
  toShare(par) {
    this.isApp() ? nt.toShare(par) : function () {
      // TODO 分享
    }();
  },
  toProList() {
    this.isApp() ? nt.toProList() : function () {
      // TODO 去定期项目列表
    }();
  }
};

export {nt, lzlh};
