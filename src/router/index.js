import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Layout from "@/layout/index";

Vue.use(Router);

export const baseRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    hidden: false,
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
          naCache: true
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
    path: "/icon",
    component: Layout,
    redirect: "/icon/index",
    meta: {
      title: "图标"
    },
    children: [
      {
        path: "index",
        name: 'baseIcon',
        component: () => import("@/views/icon/icon"),
        meta: {
          title: "基础图标",
          roles: ["admin"],
          affix: true
        }
      }
    ]
  },
  {
    path: "/permission",
    name: "permission",
    component: Layout,
    meta: {
      title: "权限"
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
          affix: true
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
      title: "菜单 嵌套",
      roles: ["admin"]
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
            path: '/nest/nest',
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
