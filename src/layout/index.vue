<template>
    <div class="app-container">
        <el-container>
            <el-aside width ref="aside">
                <Sidebar/>
            </el-aside>
            <el-container>
                <el-header>
                    <Header/>
                </el-header>
                <el-main>
                    <TagView />
                    <AppMain/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import AppMain from "./components/AppMain/AppMain";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import TagView from './components/TagView/TagView'
import { mapGetters } from "vuex";

export default {
    components: {
        AppMain,
        Sidebar,
        Header,
        TagView
    },
    computed: {
        ...mapGetters(['sidebar'])
    },
    mounted() {
        // console.log(this.sidebar);
        
    }
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.el-header {
    padding: initial;
    background-color: $headerBg;
    // line-height: 60px;
    // position: fixed;
    width: 100%;
}
.el-aside {
    background: $sidebarBg;
    border-right: 1px solid #ccc;
/*     position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transition: all .35s; */
}
.app-warpper {
    margin-left: 200px;
    transition: all .35s;
}
.app-close {
    margin-left: 65px;
}
.el-main {
    // margin-top: 46px;
    padding: initial;
}
.el-scrollbar__wrap {
    overflow-x: hidden;
    overflow-x: hidden !important;
}
.scrollbar-wrapper {
    overflow-x: hidden !important;
}
.el-scrollbar {
    height: 48px;
}
</style>
