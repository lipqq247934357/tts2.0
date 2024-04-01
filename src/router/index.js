import Vue from 'vue'
import Router from 'vue-router'

import utils from './utils'// 工具方法
import user from './user'// 用户相关
import common from './common' // 通用
import echarts from './echarts' // echarts相关
import searchPicture from './searchPicture' // echarts相关

Vue.use(Router)

export default new Router({
    routes: [
        ...utils,
        ...user,
        ...common,
        ...echarts,
        ...searchPicture
    ]
})
