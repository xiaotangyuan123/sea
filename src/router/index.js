import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,},
      /* children:[ */{
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/WeixingView',
      name:'WeixingView',
      component:()=>import('../views/WeixingView.vue')
    },
    {
      path:'/hangxian',
      name:'hangxian',
      component:()=>import('../views/hangxian.vue')

    }
    // ,
    // {
    //   path:'/daping',
    //   name:'daping',
    //   component:()=>import('../views/daping.vue')

    // }\
  ]
})

export default router
