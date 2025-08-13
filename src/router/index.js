import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/incomes', name: 'incomes', component: () => import('../views/incomesView.vue') },
    { path: '/orders', name: 'orders', component: () => import('../views/ordersView.vue') },
    { path: '/sales', name: 'sales', component: () => import('../views/salesView.vue') },
    { path: '/stocks', name: 'stocks', component: () => import('../views/stocksView.vue') },
  ],
})

export default router
