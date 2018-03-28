import {Vue} from '../../../assets/js/vE';
import {formatNumber, formatDate2} from '../../../assets/js/util';

import App from './App';
import axios from '../../../assets/js/axiosU';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.filter('dateFormat', function (value) {
  if (!value) return '';
  value = value.toString();
  return formatDate2(value);
})

Vue.filter('moneyFormat', function (value) {
  if (!value) return '';
  value = value.toString();
  return formatNumber(value, 2);
})
let pro = new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
});
