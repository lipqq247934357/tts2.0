import login from '@/views/user/login/login.vue'

export default [
    {
        path: '/user/login',
        name: 'login',
        component: login,
        // children: [
        //     // 这也是个路由记录
        //     {path: 'bar', component: login}
        // ]
    }
]
