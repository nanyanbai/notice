import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'Index',
    component: () => import('@/views/notice/index.vue')
  },
  {
    path: '/publish',
    name: 'Publish',
    component: () => import('@/views/publish/index.vue')
  },
  {
    path: '/filters',
    name: 'Filters',
    component: () => import('@/views/filter/index.vue')
  },
  {
    path: '/view',
    name: 'View',
    component: () => import('@/views/publish/view.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
