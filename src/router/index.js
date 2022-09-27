import Vue from 'vue'
import Router from 'vue-router'

import utils from './utils'// 工具方法
import user from './user'// 用户相关
import common from './common' // 通用
import echarts from './echarts' // echarts相关
import css3 from "./css3"
import vue from "./vue"
import compontent from "./components"

Vue.use(Router)

export default new Router({
    routes: [
        ...utils,
        ...user,
        ...common,
        ...vue,
        ...compontent,
        ...css3,
        ...echarts
    ]
})
