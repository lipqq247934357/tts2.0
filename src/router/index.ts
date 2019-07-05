import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

import utils from './utils'// 工具方法
import user from './user'// 用户相关
import common from './common'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        ...utils,
        ...user,
        ...common
    ]
})
