import Vue from "vue";

import "./style/index.scss"; // 公共css

import 'ant-design-vue/dist/antd.css';

import router from "./router"; // 路由配置
import store from "./store"; // vuex配置

import api from "./api"; //ajax工具配置

import App from "./App.vue"; // 入口页面

import moment from 'moment'
moment.locale('zh-cn')

import Antd, { message } from 'ant-design-vue'

Vue.use(Antd)

Vue.prototype.$api = api; // 设置ajax请求在入口处

Vue.config.productionTip = false;

let instance = null;

const render = (props) => {
  const { container } = props;
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')

}
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// 导出协议的三个函数
export async function bootstrap(props) {
}
export async function mount(props) {
  render(props);
}
export async function unmount(props) {
  await instance.$destroy();
}
