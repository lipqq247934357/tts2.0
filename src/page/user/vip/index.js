import Router from 'vue-router';
// 1.引入组件
import vipInfo from './vipInfo/App';
import cash from './cash/App';
import birthday from './birthday/App';
import xAmount from './xAmount/App';
import upGift from './upGift/App';
import signIn from './signIn/App';
import special from './special/App';
import customerService from './customerService/App';
// 2.定义组件对象
const routes = [
  {path: '/', component: vipInfo},
  {path: '/vip/cash', component: cash},
  {path: '/vip/birthday', component: birthday},
  {path: '/vip/xAmount', component: xAmount},
  {path: '/vip/upGift', component: upGift},
  {path: '/vip/signIn', component: signIn},
  {path: '/vip/special', component: special},
  {path: '/vip/customerService', component: customerService}
];

// 3.返回对象
export default new Router({
  linkActiveClass: 'active',
  routes
});
