export default [
    {
        path: '/echarts',
        name: 'echarts',
        component: () => import('@/views/echarts/index.vue'),
        children: [
            // 这也是个路由记录
            {
                path: 'demo1',
                name: 'demo1',
                component: () => import('@/views/echarts/demo1.vue')
            }
        ]
    }
]
