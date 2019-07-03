import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'// 引入饿了么
import 'element-ui/lib/theme-chalk/index.css'// 引入饿了么样式

import './style/index.scss' // 公共css

import router from './router' // 路由配置
import store from './store' // vuex配置

import api from './api'//ajax工具配置

import App from './App.vue' // 入口页面

Vue.use(ElementUI);

Vue.prototype.$api = api; // 设置ajax请求在入口处

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
