import Layout from '@/views/layout/index.vue'

export default [
    {
        path: '/echarts',
        name: 'echarts',
        component: Layout,
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
