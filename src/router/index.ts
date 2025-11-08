import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'Home',
      // lazy-loaded
      component: () => import('../views/home.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/register.vue'),
    },
  ],
})

export default router
