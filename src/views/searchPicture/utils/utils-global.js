import moment from 'moment';
import { fileTypePatterns, fileTypeImgDict } from './dict';

const dateFormat = 'YYYY/MM/DD';

export const isObject = (arg) => Object.prototype.toString.call(arg) === '[object Object]';

export function beforeRemoveNull(data) {
  let result = data;
  if (Array.isArray(data)) {
    result.forEach((item) => {
      if (isObject(item)) {
        // eslint-disable-next-line no-param-reassign
        item = removeNull(item);
      }
    });
  } else if (isObject(data)) {
    result = removeNull(data);
  }
  return result;
}

// 提交请求前，移除无效内容
export function removeNull(originObj) {
  const obj = { ...originObj };
  Object.keys(obj).forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      if (
        obj[key] === '' ||
        obj[key] === undefined ||
        obj[key] === null ||
        (Array.isArray(obj[key]) && obj[key].length === 0)
      ) {
        delete obj[key];
      }
    }
  });
  return obj;
}

export function isObjectEqual(objA, objB) {
  return JSON.stringify(objA) === JSON.stringify(objB);
}

export function sleep(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getAttrs(detail) {
  return [
    { label: '上传者', value: detail.userName },
    { label: '时间', value: moment(detail.commitTime).format(dateFormat) },
  ];
}

export function getAttrsForAudit(detail) {
  return [
    { label: '上传者', value: detail.userName },
    { label: '大小', value: detail.fileSizeStr },
    { label: '格式', value: getUrlExtension(detail.sourceUrl) },
    { label: '时间', value: moment(detail.commitTime).format(dateFormat) },
  ];
}

// 根据文件类型，返回预置缩略图
export function computeMaterialCover(url) {
  const fileExt = getUrlExtension(url);
  if (fileExt.includes('tif')) return fileTypeImgDict.blank;
  if (fileExt.includes('pdf')) return fileTypeImgDict.pdf;
  const [fileType] = Object.keys(fileTypePatterns).filter((i) => fileTypePatterns[i].test(fileExt));
  return fileTypeImgDict[fileType || 'blank'];
}

export function getUrlExtension(url) {
  if (!url || typeof url !== 'string') return '';
  return url.split(/[#?]/)[0].split('.').pop().trim().toLowerCase();
}

/**
 * localStorage 存取 Object 封装
 * setItem 支持传入过期时间（分钟）
 * 带过期时间存储 {"data":{"a":1},"timestamp":1547536618350}
 * 获取时如果没过期会取出 data，否则返回 false
 */
export const Storage = {
  setItem(key, value, expirationMin = null) {
    if (expirationMin) {
      const expirationMS = expirationMin * 60 * 1000;
      const record = {
        data: value,
        timestamp: new Date().getTime() + expirationMS,
      };
      return localStorage.setItem(key, JSON.stringify(record));
    }
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    return localStorage.setItem(key, value);
  },

  getItem(key) {
    const record = JSON.parse(localStorage.getItem(key));
    if (!record) {
      return null;
    }
    if (record.timestamp) {
      // 过期返回false, 没有过期返回数据
      return new Date().getTime() < record.timestamp && record.data;
    }
    return record;
  },
};

/**
  截取字符串(通过substring实现并支持中英文混合)
  @param str
  @param n 需要截取的长度
  @returns {*}
 */
export function subStr(str, n) {
  const r = /[^\x00-\xff]/g;
  if (str.replace(r, '**').length <= n) {
    return str;
  }
  const m = Math.floor(n / 2);
  for (let i = m; i < str.length; i++) {
    if (str.substr(0, i).replace(r, '**').length >= n) {
      return `${str.substr(0, i)}...`;
    }
  }
  return str;
}

export function isSameDay(dateA, dateB = new Date()) {
  const a = new Date(dateA);
  const b = new Date(dateB);
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function getUrlParameterByName(name, url = window.location.href) {
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * 设置指定元素全屏
 * @param {dom} ele
 */
export function fullScreen(ele) {
  const el = ele || document.documentElement;
  const rfs =
    el.requestFullscreen ||
    el.webkitRequestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullScreen;
  if (rfs) {
    rfs.call(el);
  } else if (window.ActiveXObject) {
    // for Internet Explorer
    // eslint-disable-next-line no-undef
    const wscript = new ActiveXObject('WScript.Shell');
    if (wscript != null) {
      wscript.SendKeys('{F11}');
    }
  }
}

export function getFullscreenElement() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement /* Old Chrome, Safari and Opera syntax */ ||
    document.msFullscreenElement
  );
}
/**
 * 设置指定元素退出全屏
 */
export function exitFullScreen() {
  if (!getFullscreenElement()) return; // 全屏元素不存在

  const el = document;
  const cfs = el.exitFullscreen || el.mozCancelFullScreen || el.webkitCancelFullScreen;
  if (cfs) {
    cfs.call(el);
  } else if (window.ActiveXObject) {
    // for Internet Explorer
    // eslint-disable-next-line no-undef
    const wscript = new ActiveXObject('WScript.Shell');
    if (wscript != null) {
      wscript.SendKeys('{F11}');
    }
  }
}
// 获取cookie、
function getCookie(name) {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  if (arr) return unescape(arr[2]);
  return null;
}

// 设置cookie,增加到vue实例方便全局调用
function setCookie(name, value, expireDays) {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + expireDays);
  const expireDateKeyValue = expireDays === null ? '' : `;expires=${expireDate.toUTCString()}`;
  // const domainKeyValue = location.host.indexOf('aijianzi') > 0
  // ? ';domain=.aijianzi.com'
  // : ''
  const cookieValue = [
    escape(value),
    expireDateKeyValue,
    // domainKeyValue,
    ';path=/',
  ].join('');
  document.cookie = `${name}=${cookieValue}`;
}

const isLottieFile = (item) => {
  return item.fileType === 'application/json';
};

export { getCookie, setCookie, isLottieFile };
