import dashboard from '@/views/dashboard/index.vue'
import drop from '@/views/css3/drop.vue'
import canvas from '@/views/css3/canvas.vue'


export default [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
    },
    {
        path: '/drop',
        name: 'drop',
        component: drop
    },
    {
        path: '/canvas',
        name: 'canvas',
        component: canvas
    }
]
