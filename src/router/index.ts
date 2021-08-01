import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { store } from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/pages/OnBoading.vue'),
    beforeEnter(to, from, next) {
      store.dispatch('auth/currentUser').then(() => {
        if (store.getters['auth/check']) {
          next('/index')
        } else {
          next()
        }
      });
    }
  },
  {
    path: '/login',
    component: () => import('@/pages/Login.vue'),
    beforeEnter(to, from, next) {
      store.dispatch('auth/currentUser').then(() => {
        if (store.getters['auth/check']) {
          next('/index')
        } else {
          next()
        }
      });
    }
  },
  {
    path: '/password/reset',
    component: () => import('@/pages/password/Reset.vue'),
    beforeEnter(to, from, next) {
      store.dispatch('auth/currentUser').then(() => {
        if (store.getters['auth/check']) {
          next('/index')
        } else {
          next()
        }
      });
    }
  },
  {
    path: '/password/sent',
    component: () => import('@/pages/password/Sent.vue'),
    beforeEnter(to, from, next) {
      store.dispatch('auth/currentUser').then(() => {
        if (store.getters['auth/check']) {
          next('/index')
        } else {
          next()
        }
      });
    }
  },
  {
    path: '/password/regenerate',
    component: () => import('@/pages/password/Regenerate.vue'),
    beforeEnter(to, from, next) {
      store.dispatch('auth/currentUser').then(() => {
        if (store.getters['auth/check']) {
          next('/index')
        } else {
          next()
        }
      });
    }
  },
  {
    path: '/password/complete',
    component: () => import('@/pages/password/Complete.vue'),
  },
  {
    path: '/index',
    component: () => import('@/pages/index/City.vue'),
    children: [
      {
        path: '',
        redirect: '/index/city'
      },
      {
        path: 'city',
        component: () => import('@/pages/index/City.vue'),
        beforeEnter(to, from, next) {
          store.dispatch('auth/currentUser').then(() => {
            if (!store.getters['auth/check']) {
              next('/login')
            } else {
              next()
            }
          });
        }
      },
      {
        path: 'kw',
        component: () => import('@/pages/index/City.vue'),
        beforeEnter(to, from, next) {
          if (!store.getters['auth/check']) {
            next('/login')
          } else {
            next()
          }
        }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
