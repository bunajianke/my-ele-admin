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
                    <AppMain/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import AppMain from "./components/AppMain";
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header'
export default {
    components: {
        AppMain,
        Sidebar,
        Header
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
    overflow-x: hidden !important;    
}
.scrollbar-wrapper {
    overflow-x: hidden !important;
}
</style>
