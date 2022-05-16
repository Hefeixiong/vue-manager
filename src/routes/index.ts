import {createRouter, createWebHistory} from 'vue-router';
import Layout from '@/layout/index.vue'
import User from '@/view/UserManage.vue'
import Test from '@/view/Test.vue'
const routes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: "user",
        component: Test
      }
    ]
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
