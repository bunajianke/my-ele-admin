import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/layout/index'

Vue.use(Router)

export const baseRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
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
    component: () => import('@/views/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    meta: {
      title: '404'
    }
  }
]

export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true,
    name: 'permission',
    mate: {
      title: '权限',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'permissionPage',
        meta: {
          title: '权限页面',
          roles: ['admin']
        }
      },
      {
        path: '/role',
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
  routes: baseRoutes,
  scrollBehavior: () => ({ y: 0 })
})

const router = createRouter()

export default router