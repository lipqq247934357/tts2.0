export default [
    {
        path: '/1',
        name: 'dashboard1',
        component: () => import('@/views/dashboard/index.vue')
    },
    {
        path: '/2',
        name: 'dashboard2',
        component: () => import('@/views/dashboard/index2.vue')
    },
    {
        path: '/3',
        name: 'dashboard3',
        component: () => import('@/views/dashboard/index3.vue')
    },
    {
        path: '/4',
        name: 'dashboard4',
        component: () => import('@/views/dashboard/index4.vue')
    }
]
