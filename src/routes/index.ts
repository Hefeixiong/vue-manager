import {createRouter, createWebHistory} from 'vue-router';
import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout
  },
]

const history = createWebHistory()

export const router = createRouter({
  history: history,
  routes
})

router.afterEach(() => {
  console.log('路由切换了');
});
