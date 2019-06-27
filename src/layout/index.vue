<template>
    <div class="app-container">
        <el-container>
            <el-aside width ref="aside">
                <Sidebar/>
            </el-aside>
            <el-container :class="{ 'app-close': !sidebar.opened }" class="app-warpper">
                <el-header>
                    <Header/>
                    <el-row class="tagview-container">
                        <el-col :span="15">
                            <TagView />
                        </el-col>
                        <el-col :span="3" class="tagview-contral">
                            <div>
                                <el-button title="关闭所有标签页" icon="el-icon-delete" circle></el-button>
                                <el-button title="刷新当前标签页" icon="el-icon-refresh" circle></el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main>
                    <AppMain/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import AppMain from "./components/AppMain";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
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
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transition: all .35s;
}
.app-warpper {
    margin-left: 200px;
    transition: all .35s;
}
.app-close {
    margin-left: 65px;
}
.el-main {
    margin-top: 110px;
    padding: initial;
}
.el-scrollbar__wrap {
    overflow-x: hidden;
    overflow-x: hidden !important;
}
.scrollbar-wrapper {
    overflow-x: hidden !important;
}
.tagview-container {
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.5);
    width: 100%;
}
.tagview-contral {
    height: 46px;
    line-height: 46px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    .el-button.is-circle {
        padding: 6px;
    }
}
.el-scrollbar {
    height: 48px;
}
</style>
