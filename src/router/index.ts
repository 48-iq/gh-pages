import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/gh-pages/'),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/HelloWorld.vue'),
    }
  ],
})

export default router
