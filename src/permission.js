import router from "./router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getPageTitle } from "@/utils/get-page-title";
import { getToken } from "@/utils/auth";

router.beforeEach(async (to, from, next) => {
    NProgress.start()

    const token = getToken()

    if(token) {
        if(to.path === '/login') {
            next({ path: '/' })
        }
    }

    document.title = getPageTitle(to.meta.title);
    console.log(to);
    next()
})

router.afterEach(() => {
    NProgress.done()
})

