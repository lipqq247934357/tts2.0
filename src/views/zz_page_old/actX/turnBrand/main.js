import Vue from 'vue';
import App from './App';
import router from './index';
import Router from 'vue-router';
import axios from '../../../assets/js/axiosU';
import '../../../assets/css/style_act.css';

Vue.use(Router);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
