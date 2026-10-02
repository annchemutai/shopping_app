import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/SignUp.vue'
import Profile from '@/components/Profile.vue'
import Products from '@/components/Products.vue'
import ViewProduct from '@/components/ViewProducts.vue'
import Admin from '@/components/Admin.vue'
import Orders from '@/components/Orders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/products',
      component: Products
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      name: 'ViewProduct',
      path: '/viewproduct',
      component: ViewProduct,
      props: route => ({ id: Number(route.params.id) }) 
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/orders',
      component: Orders
    },
  ],
})

export default router
