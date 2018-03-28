/*eslint-disable*/
/**
 * 存储sessionStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
}

/**
 * 获取sessionStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
}

/**
 * 删除sessionStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
}

/**
 * 格式化时间
 */
export const formatDate = data => {
  typeof data === 'string' || (data = data + '');
  return data.replace(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})\d{3}$/, '$1-$2-$3 $4:$5:$6')
}

/**
 * 格式化日期
 */
export const formatDate2 = data => {
  typeof data === 'string' || (data = data + '');
  return data.replace(/^(\d{4})(\d{2})(\d{2})\d{2}\d{2}\d{2}\d{3}$/, '$1-$2-$3')
}

/**
 * 格式化日期
 */
export const formatDate3 = data => {
  typeof data === 'string' || (data = data + '');
  return data.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3')
}

/**
 * 格式化金额
 */
/**
 * 格式化数字千分位逗号分割(可限制小数位保留位数)
 * s  金额
 * n  保留位数
 */
export const formatNumber = function (s, n) {
  if(s === undefined) return;
  n = n > 0 && n <= 20 ? n : 2;
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
  var t = "";
  for (var i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + r;
};

/**
 * js乘法
 */
export const myMul = function (arg1, arg2) {
  var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length
  } catch (e) {
  }
  try {
    m += s2.split(".")[1].length
  } catch (e) {
  }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
};

/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export const urlParse = function () {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};
