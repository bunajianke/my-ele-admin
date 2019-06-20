import router from "./router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getPageTitle } from "@/utils/get-page-title";

router.beforeEach(async (to, from, next) => {
    NProgress.start()

    document.title = getPageTitle(to.meta.title);
    console.log(to);
    next()
})

router.afterEach(() => {
    NProgress.done()
})

