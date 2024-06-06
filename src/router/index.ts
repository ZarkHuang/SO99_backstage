import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useProviderStore } from '../stores/provider'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        path: '/home',
        name: '首頁',
        component: () => import('@/pages/HomePage.vue'),
        meta: { breadcrumb: '首頁' }
      },
      {
        path: '/user',
        name: '角色管理',
        component: () => import('@/pages/UserPage.vue'),
        meta: { breadcrumb: '角色管理' }
      },
      {
        path: '/account',
        name: '管理帳號',
        component: () => import('@/pages/AccountPage.vue'),
        meta: { breadcrumb: '管理帳號' }
      },
      {
        path: '/user-data',
        name: '用戶資料',
        component: () => import('@/pages/UserDataPage.vue'),
        meta: { breadcrumb: '用戶資料' }
      },
      {
        path: '/report',
        name: '分析報表',
        component: () => import('@/pages/ReportPage.vue'),
        meta: { breadcrumb: '分析報表' }
      },
      {
        path: '/messages',
        name: '訊息管理',
        component: () => import('@/pages/MessagesPage.vue'),
        meta: { breadcrumb: '訊息管理' }
      },
      {
        path: '/guidance',
        name: '個管輔導',
        component: () => import('@/pages/GuidancePage.vue'),
        meta: { breadcrumb: '個管輔導' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  useProviderStore().loadingBar?.start()
})

router.afterEach(() => {
  useProviderStore().loadingBar?.finish()
})

export default router
