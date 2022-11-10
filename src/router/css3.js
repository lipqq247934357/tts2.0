import drop from '@/views/css3/drop/drop.vue'
import canvas from '@/views/css3/canvas/canvas.vue'
import flex from '@/views/css3/flex/flex.vue'
import demo from '@/views/css3/demo/demo.vue'
import transition from '@/views/css3/transition/transition.vue'
import desginAlert from '@/views/css3/desginAlert/desginAlert.vue'
import iconfont from '@/views/css3/iconfont/App.vue'

export default [
    {
        path: '/css3/drop',
        name: 'drop',
        component: drop
    },
    {
        path: '/css3/canvas',
        name: 'canvas',
        component: canvas
    },
    {
        path: '/css3/flex',
        name: 'flex',
        component: flex
    },
    {
        path: '/css3/cssDemo',
        name: 'cssDemo',
        component: demo
    },
    {
        path: '/css3/transition',
        name: 'transition',
        component: transition
    },
    {
        path: '/css3/desginAlert',
        name: 'desginAlert',
        component: desginAlert
    },
    {
        path: '/css3/iconfont',
        name: 'iconfont',
        component: iconfont
    },
]
