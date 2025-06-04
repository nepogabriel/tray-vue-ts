import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Guard from '../services/middleware'
import SellerRegisterView from '../views/seller/SellerRegisterView.vue'
import ListSellerView from '../views/seller/ListSellerView.vue'
import SaleRegisterView from '../views/sale/SaleRegisterView.vue'

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
      path: '/seller-register',
      name: 'seller-register',
      component: SellerRegisterView,
      beforeEnter: Guard.auth,
    },
    {
      path: '/list-seller',
      name: 'list-seller',
      component: ListSellerView,
      beforeEnter: Guard.auth,
    },
    {
      path: '/sale-register',
      name: 'sale-register',
      component: SaleRegisterView,
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
