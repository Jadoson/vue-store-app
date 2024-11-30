import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CartPage from '@/views/CartPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router
