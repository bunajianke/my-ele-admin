<template>
    <div class="side-wrapper">
        <div class="logo">
            <h1>LOGO</h1>
        </div>
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                default-active="activeMenu"
                class="el-menu-vertical-side"
                :collapse="isCollapse"
                background-color="#393E46"
                text-color="#fff"
                active-text-color="#ffd04b"
                :router="true"
            >
                <SidebarItem v-for="(route) in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from './SidebarItem'
export default {
    name: "Sidebar",
    components: {
        SidebarItem
    },
    data() {
        return {};
    },
    mounted() {
        // console.log(this.permission_routes)
    },
    computed: {
        ...mapGetters(["sidebar", "permission_routes"]),
        isCollapse() {
            return !this.sidebar.opened;
        },
        activeMenu() {
            console.log(this.$route.path);
            
            return this.$route.path
        }
    }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-side:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.side-wrapper {
    height: calc(100vh - 116px);
}
.el-menu-vertical-side {
    height: 100%;
    border-right: initial;
}
.el-scrollbar {
    height: 100%;
}
.el-scrollbar__wrap {
    overflow-x: hidden !important;
}
.scrollbar-wrapper {
    overflow-x: hidden !important;
}
.logo {
    width: 100%;
    height: 60px;
    background-color: #252c41;
    line-height: 60px;
    text-align: center;
    color: antiquewhite;
}

</style>


