import Router from 'vue-router';
// 1.引入组件
import turnBrand from './turnBrand';
import turnBrandRecord from './turnBrandRecord';
// 2.定义组件对象
const routes = [
  {path: '/', component: turnBrand},
  {path: '/record', component: turnBrandRecord}
];
// 3.返回对象
export default new Router({
  linkActiveClass: 'active',
  routes
});
