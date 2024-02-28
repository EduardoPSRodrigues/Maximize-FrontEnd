import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ListNews from '../views/ListNews.vue'
import FullNews from '../views/FullNews.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/listnews',
      name: 'ListNews',
      component: ListNews
    },
    {
      path: '/listnews/:id',
      name: 'FullNews',
      component: FullNews
    },
  
  ]
})

export default router
