import {createRouter, createWebHistory} from 'vue-router';
import Elm from '@/layout/Elm.vue'
import Index from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    component: Elm
  },
  {
    path: '/index',
    component: Index
  }
]

const history = createWebHistory()

export const router = createRouter({
  history: history,
  routes
})

router.afterEach(() => {
  console.log('路由切换了');
});
