export default [
    {
        path: '/',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue')
    },
    {
        path: '/a2',
        name: 'dashboard2',
        component: () => import('@/views/dashboard/index2.vue')
    },
    {
        path: '/a3',
        name: 'dashboard3',
        component: () => import('@/views/dashboard/index3.vue')
    },
    {
        path: '/a4',
        name: 'dashboard4',
        component: () => import('@/views/dashboard/index4.vue')
    }
]
