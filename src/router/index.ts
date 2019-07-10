import Vue from 'vue'
import Router from 'vue-router'
import Layout from '~/views/layout/Layout.vue'

import echarts from './echarts'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            component: Layout,
            redirect: '/dashboard',
            name: 'Dashboard',
            children: [{
                path: 'dashboard',
                component: () => import('~/views/dashboard/index.vue')
            }]
        },
        ...echarts,
        {path: '/403', component: () => import('~/views/403.vue')},
        {path: '/404', component: () => import('~/views/404.vue')},
        {path: '*', redirect: '/404'}
    ]
})
