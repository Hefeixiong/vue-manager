import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: "/user",
    children: [
      {
        path: "user",
        component: () => import('@/view/UserManage.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/view/Login.vue'),
  },
  {
    path: '/test',
    component: () => import('@/view/Test.vue')
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
