import Home from '../views/searchPicture/searchPicture/index.vue'
import Img2Img from '../views/searchPicture/img2img/index.vue'


export default [
  {
    path: '/searchPicture',
    name: 'searchPicture',
    component: Home
  },
  {
    path: '/searchPicture/img2img',
    name: 'searchPicture-img2Img',
    component: Img2Img
  }
]
