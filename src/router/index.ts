import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { authGuard }  from '@/router/guards/auth'
import Guard from '../services/middleware'
import ListSaleView from '../views/sale/ListSaleView.vue'
import Login from '../views/Auth/LoginView.vue'
import RegisterView from '../views/Auth/RegisterView.vue'
import SellerRegisterView from '../views/seller/SellerRegisterView.vue'
import ListSellerView from '../views/seller/ListSellerView.vue'
import SaleRegisterView from '../views/sale/SaleRegisterView.vue'
import SalesBySellerView from '../views/sale/SalesBySellerView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/',
    name: 'home',
    component: ListSaleView,
    meta: { requiresAuth: true },
  },
  {
    path: '/seller-register',
    name: 'seller-register',
    component: SellerRegisterView,
    meta: { requiresAuth: true },
  },
  {
    path: '/list-seller',
    name: 'list-seller',
    component: ListSellerView,
    meta: { requiresAuth: true },
  },
  {
    path: '/sale-register',
    name: 'sale-register',
    component: SaleRegisterView,
    meta: { requiresAuth: true },
  },
  {
    path: '/list-sales-by-seller/:id',
    name: 'list-sales-by-seller',
    component: SalesBySellerView,
    meta: { requiresAuth: true },
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(authGuard);

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/login',
//       name: 'login',
//       component: Login,
//     },
//     {
//       path: '/register',
//       name: 'register',
//       component: RegisterView,
//     },
//     {
//       path: '/',
//       name: 'home',
//       component: ListSaleView,
//       beforeEnter: Guard.auth,
//     },
//     {
//       path: '/seller-register',
//       name: 'seller-register',
//       component: SellerRegisterView,
//       beforeEnter: Guard.auth,
//     },
//     {
//       path: '/list-seller',
//       name: 'list-seller',
//       component: ListSellerView,
//       beforeEnter: Guard.auth,
//     },
//     {
//       path: '/sale-register',
//       name: 'sale-register',
//       component: SaleRegisterView,
//       beforeEnter: Guard.auth,
//     },
//     {
//       path: '/list-sales-by-seller/:id',
//       name: 'list-sales-by-seller',
//       component: SalesBySellerView,
//       beforeEnter: Guard.auth,
//     },
//   ],
// })

export default router
