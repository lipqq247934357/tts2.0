import Router from 'vue-router';
// 1.引入组件
import noticeDetail from './noticeDetail';
import noticeList from './noticeList';
// 2.定义组件对象
const routes = [
  {path: '/', component: noticeList},
  {path: '/detail/:id', component: noticeDetail}
];
// 3.返回对象
export default new Router({
  linkActiveClass: 'active',
  routes
});
