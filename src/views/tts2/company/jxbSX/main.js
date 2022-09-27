// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App';
import '../../../assets/css/style_act.css';

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
