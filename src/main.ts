import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui"; // 引入饿了么
import "element-ui/lib/theme-chalk/index.css"; // 引入饿了么样式

import "./style/index.scss"; // 公共css

import router from "./router"; // 路由配置
import store from "./store"; // vuex配置

import api from "./api"; //ajax工具配置

import App from "./App.vue"; // 入口页面

Vue.use(ElementUI);

Vue.prototype.$api = api; // 设置ajax请求在入口处

Vue.config.productionTip = false;

let instance:any = null;

const render = (props:any) => {
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
