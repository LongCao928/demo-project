import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pageA',
      component: () => import('@/views/pageA.vue'),
    },
    {
      path: '/a',
      redirect: '/'
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/views/base/NotFound.vue'),
      meta: {
        title: '页面丢失了...'
      }
    },
    {
      path: '/pageB',
      name: 'pageB',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/PageB.vue')
    },
    {
      path: '/pageC',
      name: 'pageC',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/PageC.vue')
    },
  ]
})

export default router
