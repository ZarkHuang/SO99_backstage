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
      },
      {
        path: '/user',
        name: '個人資料',
        component: () => import('@/pages/UserPage.vue')
      }
    ]
  },
  {
    path: '/',
    name: '功能管理',
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        path: '/tunnel/list',
        name: '功能列表',
        component: () => import('@/pages/Tunnel/ListPage.vue'),
      },
      {
        path: '/tunnel/download',
        name: '下載',
        component: () => import('@/pages/Tunnel/DownloadPage.vue'),
      },
      {
        path: '/tunnel/config',
        name: '配置文件',
        component: () => import('@/pages/Tunnel/ConfigPage.vue'),
      },
      {
        path: '/tunnel/status',
        name: '節點狀態',
        component: () => import('@/pages/Tunnel/StatusPage.vue'),
      },
    ]
  },
  {
    path: '/',
    name: '擴展功能',
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        path: '/expand/domainname',
        name: '免費域名',
        component: () => import('@/pages/Expand/Domainname.vue'),
      },
    ]
  },
  {
    path: '/',
    name: '增值中心',
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        path: '/shop/topup',
        name: '購買點數卡',
        component: () => import('@/pages/Shop/Topup.vue'),
      },
      {
        path: '/other/buy',
        name: '積分商城',
        component: () => import('@/pages/Shop/BuyPage.vue'),
      },
      {
        path: '/other/record',
        name: '消費記錄',
        component: () => import('@/pages/Shop/RecordPage.vue'),
      },
    ]
  },
  {
    path: '/',
    name: '其他資訊',
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        path: '/other/about',
        name: '其他',
        component: () => import('@/pages/Other/AboutPage.vue'),
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },
  // {
  //   path: '/login',
  //   name: '登錄',
  //   component: () => import('@/views/LoginView.vue')
  // }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
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
