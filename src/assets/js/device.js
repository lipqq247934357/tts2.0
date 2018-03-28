/*eslint-disable */
// 1-ios,2-android,3-wap
export default {
  getDevice() {
    let u = navigator.userAgent.toLowerCase();
    let isApp = window._LZLH !== undefined;

    // wx有问题
    if (u.indexOf('micromessenger') !== -1) {
      return 4;
    }

    let tokens = ['iphone', 'ipod', 'ipad'];
    for (let i = 0; i < tokens.length; i++) {
      if (u.indexOf(tokens[i]) > -1) {
        return isApp ? 1 : 3;
      }
    }
    tokens = ['linux', 'android'];
    for (let i = 0; i < tokens.length; i++) {
      if (u.indexOf(tokens[i]) > -1) {
        return isApp ? 2 : 3;
      }
    }
    return 3;// 如果是pc默认为touch
  }
}
