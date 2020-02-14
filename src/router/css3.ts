import drop from '@/views/css3/drop/drop.vue'
import canvas from '@/views/css3/canvas/canvas.vue'
import flex from '@/views/css3/flex/flex.vue'
import demo from '@/views/css3/demo/demo.vue'

export default [
    {
        path: '/drop',
        name: 'drop',
        component: drop
    },
    {
        path: '/canvas',
        name: 'canvas',
        component: canvas
    },
    {
        path: '/flex',
        name: 'flex',
        component: flex
    },
    {
        path: '/cssDemo',
        name: 'cssDemo',
        component: demo
    }
]
