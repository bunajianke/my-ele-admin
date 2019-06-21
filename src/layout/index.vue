<template>
    <div class="app-container">
        <el-container>
            <el-aside width="">
                <Sidebar />
            </el-aside>
            <el-container>
                <el-header>
                    <Header />
                </el-header>
                <el-main>
                    <Breakcrumb />
                    <AppMain/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import AppMain from "./components/AppMain";
import Breakcrumb from '@/components/Breakcrumb'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
export default {
    components: {
        AppMain,
        Breakcrumb,
        Sidebar,
        Header
    },
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1"
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style lang="scss" scoped>
.el-header {
    padding: initial;
    background-color: #393E46;
    line-height: 60px;
}
.el-aside {
    background: #393E46;
    border-right: 1px solid #ccc;
}

.el-main {
    padding: initial;
}
.el-scrollbar__wrap {
    overflow-x: hidden;
}
.scrollbar-wrapper {
    overflow-x: hidden !important;
}
</style>
