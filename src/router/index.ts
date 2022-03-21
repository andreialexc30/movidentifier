import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WatchList from '../views/WatchList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/watch-list',
    name: 'WatchList',
    component: WatchList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
