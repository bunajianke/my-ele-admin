import router, { asyncRoutes } from "@/router";
import NProgress from "nprogress";
import store from "./store";
import "nprogress/nprogress.css";
import { getPageTitle } from "@/utils/get-page-title";
import { getToken } from "@/utils/auth";

const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const token = getToken();
  // next()


  if (token) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      // const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      const hasRoles = store.state.user.roles && store.state.user.roles.length > 0;

      console.log(store.state.user.roles);
      
      if (hasRoles && store.getters.roles) {
        console.log('has roles');
        var nextStore = function () {
            return new Promise(resolve => {
                if(store.getters.roles && store.getters.roles.length > 0) {
                    resolve(store)
                }
            })
        }
        nextStore().then(res => {
          console.log(res);
          next();
        });
      } else {
        console.log("no roles", store.getters);
        console.log("no roles");
        try {
          const roles = await store.dispatch("user/userInfo");
          const accessRoutes = await store.dispatch(
            "permission/generateRoutes",
            roles
          );
          console.log(roles);
          console.log(accessRoutes);

          router.addRoutes(accessRoutes);

          //   next({ ...to, replace: true });

          next({ ...to, replace: true });
        } catch (error) {
          // next(`/login?redirect=${to.path}`);
        }

        // next({ ...to, replace: true });
      }
    }
  } else {
    // has no token
    console.log("no token");
    if (whiteList.indexOf(to.path) === -1) {
      next("/login?redirec=" + to.path);
    } else {
      next();
    }
  }

  document.title = getPageTitle(to.meta.title);
});

router.afterEach(() => {
  NProgress.done();
});
