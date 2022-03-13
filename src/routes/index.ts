import {createRouter, createWebHistory} from 'vue-router';
import Elm from '@/layout/Elm.vue'

const routes = [
  {
    path: '/',
    component: Elm
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
