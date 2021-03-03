import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import OnBoading from '../pages/OnBoading.vue'
import Login from '../pages/Login.vue'
import { store } from '../store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: OnBoading
  },
  {
    path: '/login',
    component: Login,
    beforeEnter(to, from, next) {
      // FIXME: store.gettersが動作しない
      if (store.getters['auth/check']) {
        next('/index')
      } else {
        next()
      }
    }
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
