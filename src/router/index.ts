import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/Login.vue'
import Guard from '../services/middleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: Guard.auth,
    },
    {
      path: '/about',
      name: 'about',
      beforeEnter: Guard.auth,
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
