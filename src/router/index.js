import { createRouter, createWebHistory } from 'vue-router'
import ArticleComponent from '../components/ArticleComponent.vue'
import TwoComponent from '../components/twoComponent.vue'



const routes = [
  {
    path: '/',
    name: 'article',
    component: ArticleComponent
  },

  {
    path: '/two',
    name: 'two',
    component: TwoComponent
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
