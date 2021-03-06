import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Layout from "@/layout/index";

Vue.use(Router);

export const baseRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/redirect')
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    hidden: true,
    meta: {
      title: "首页",
      naCache: true
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard"),
        meta: {
          title: "仪表盘",
          naCache: true,
          affix: true
        }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    hidden: true,
    component: () => import("@/views/login"),
    meta: {
      title: "登录"
    }
  },
  {
    path: "/404",
    name: "404",
    hidden: true,
    component: () => import("@/views/404"),
    meta: {
      title: "404"
    }
  }
];

export const asyncRoutes = [
  {
    path: '/article',
    component: Layout,
    name: 'article',
    redirect: '/article/index',
    hidden: false,
    meta: {
      title: '文章',
      roles: ['admin'],
      icon: 'icon'
    },
    children: [
      {
        path: 'index',
        name: 'articleList',
        component: () => import('@/views/article/article'),
        meta: {
          title: '文章列表',
          roles: ['admin'],
          icon: ''
        }
      },
      {
        path: '/article/detail/:id',
        name: 'articleDetail',
        component: () => import('@/views/article/detail'),
        hidden: true,
        meta: {
          title: '文章详情',
          roles: ['admin'],
          icon: ''
        }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    name: 'profile',
    redirect: '/profile/index',
    hidden: true,
    meta: {
      title: '账号信息',
      roles: ['admin'],
      icon: 'icon'
    },
    children: [
      {
        path: 'index',
        name: 'baseInfo',
        component: () => import('@/views/profile/index'),
        meta: {
          title: '基本信息',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: "/icon",
    component: Layout,
    redirect: "/icon/index",
    meta: {
      title: "图标",
      icon: 'icon'
    },
    children: [
      {
        path: "index",
        name: 'baseIcon',
        component: () => import("@/views/icon/icon"),
        meta: {
          title: "基础图标",
          roles: ["admin"],
          // affix: true
        }
      }
    ]
  },
  {
    path: '/upload',
    component: Layout,
    redirect: '/upload/index',
    meta: {
      title: '上传',
      icon: 'permission'
    },
    children: [
      {
        path: 'index',
        name: 'baseUpload',
        component: () => import("@/views/upload/index"),
        meta: {
          title: '图片上传',
          roles: ['admin']
        }
      },
      {
        path: 'file',
        name: 'baseFile',
        component: () => import("@/views/upload/file"),
        meta: {
          title: '文件上传',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: "/permission",
    name: "permission",
    component: Layout,
    meta: {
      title: "权限",
      icon: 'permission'
    },
    redirect: "/permission/page",
    alwaysShow: true,
    children: [
      {
        path: "/permission/page",
        name: 'permissionPage',
        component: () => import("@/views/permission/page"),
        meta: {
          title: "权限页面",
          roles: ["admin"]
        }
      },
      {
        path: "/permission/role",
        name: 'permissionRole',
        component: () => import("@/views/permission/role"),
        meta: {
          title: "权限角色",
          roles: ["admin"]
        }
      }
    ]
  },
  {
    path: "/table",
    name: "table",
    component: Layout,
    meta: {
      title: "表格",
      roles: ["admin", "editors"],
      icon: 'table'
    },
    redirect: "/table/index",
    children: [
      {
        path: "/table/index",
        name: 'baseTable',
        component: () => import("@/views/table/table"),
        meta: {
          title: "基础表格",
          roles: ["admin"],
          // affix: true
        }
      }
    ]
  },
  {
    path: "/nest",
    name: "nest",
    component: Layout,
    alwaysShow: true,
    meta: {
      title: "菜单嵌套",
      roles: ["admin"],
      icon: 'nest'
    },
    redirect: "/nest/index",
    children: [
      {
        path: "/nest/index",
        name: 'nest-1',
        alwaysShow: true,
        component: () => import("@/views/nest/nest_1"),
        meta: {
          title: "嵌套一",
          roles: ["admin"]
        },
        children: [
          {
            path: '/nest/nest-1',
            name: 'nest-1-1',
            meta: {
              title: '嵌套一1',
              roles: ['admin']
            },
            component: () => import('@/views/nest/nest_1_1')
          }
        ]
      }
    ]
  }
];

const createRouter = () =>
  new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: baseRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
