export default [
    {
        path: '/user/login',
        name: 'login',
        component: () => import('@/views/user/login/login.vue'),
        // children: [
        //     // 这也是个路由记录
        //     {path: 'bar', component: login}
        // ]
    }
]
