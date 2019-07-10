export default [
    {
        path: '/utils/weightEvargeCount',
        name: 'weightEvargeCount',
        component: () => import('@/views/utils/weightEvargeCount.vue'),
    },
    {
        path: '/utils/copy',
        name: 'copyUtils',
        component: () => import('@/views/utils/copy/index.vue'),
    }
]
