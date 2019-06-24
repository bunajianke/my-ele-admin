import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/layout/index'

Vue.use(Router);

export const baseRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'layout',
    hidden: false,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard'),
        meta: {
          title: '仪表盘'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import('@/views/404'),
    meta: {
      title: '404'
    }
  }
]

export const asyncRoutes = [
  {
    path: '/icon',
    component: Layout,
    redirect: '/icon/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/icon/icon'),
        meta: {
          title: '图标',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/permission',
    name: 'permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true,
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        meta: {
          title: '权限页面',
          roles: ['admin']
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        meta: {
          title: '权限角色',
          roles: ['admin']
        }
      }
    ]
  }
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: baseRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router