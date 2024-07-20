import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Checkout from '@/views/Checkout.vue'
import Payment from '@/views/Payment.vue'
import Dashboard from '@/views/Admin/Dashboard.vue'
import OrderList from '@/views/Admin/OrderList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:id/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/admin/list-order',
      name: 'list-order',
      component: OrderList
    },
  ]
})

export default router
