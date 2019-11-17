import Vue from 'vue'
import Router from 'vue-router'

import utils from './utils'// 工具方法
import user from './user'// 用户相关
import common from './common'

Vue.use(Router)

export default new Router({
    routes: [
        ...utils,
        ...user,
        ...common
    ]
})
