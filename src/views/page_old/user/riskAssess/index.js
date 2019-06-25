import Router from 'vue-router';
// 1.引入组件
import riskAssess from './riskAssess';
import riskAssessInvest from './riskAssessInvest';
import riskAssessResult from './riskAssessResult';
// 2.定义组件对象
const routes = [
  {path: '/', component: riskAssess},
  {path: '/risk4Invest', component: riskAssessInvest},
  {path: '/result', component: riskAssessResult}
];

// 3.返回对象
export default new Router({
  linkActiveClass: 'active',
  routes
});
