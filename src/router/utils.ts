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
    },
    {
        path: '/utils/qrcode',
        name: 'qrCodeUtils',
        component: () => import('@/views/utils/qrcode/index.vue'),
    },
    {
        path:'/utils/cookbook',
        name:'cookbook',
        component:()=>import('@/views/utils/cookbook/index.vue')
    }

]
