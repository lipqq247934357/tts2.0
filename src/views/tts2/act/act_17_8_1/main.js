// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import {Vue} from '../../../assets/js/vE';
import App from './App';
import axios from '../../../assets/js/axiosU';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  created() {
    // 1.设置基本路径
    sessionStorage.setItem('baseUrl', process.env.baseUrl);
  }
});
