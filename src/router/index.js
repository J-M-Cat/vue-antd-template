import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout/indexPage.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/indexPage.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404Page.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/indexPage.vue')
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
