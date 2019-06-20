<template>
    <el-row type="flex" justify="space-between">
        <el-col :span="2">
            <el-button class="menu-toggle-btn" type="primary" round @click="toggleSidebar">{{ sidebar.opened | text }}</el-button>
        </el-col>
        <el-col :span="22">
            <el-menu
                :default-active="activeIndex2"
                class="el-menu-main"
                mode="horizontal"
                background-color="#393E46"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4">
                    <a href="https://www.ele.me" target="_blank">订单管理</a>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1",
            // text: '收起'
        };
    },
    methods: {
        ...mapActions({
            toggleSidebar: 'app/toggleSidebar'
        }),
        /* toggle() {
            this.toggleSidebar();
            this.text = this.sidebar.opened ? '收起' : '展开';
        } */
    },
    computed: {
        ...mapGetters(["sidebar"])
    },
    filters: {
        text: (val) => {
            return val ? '收起' : '展开';
        }
    }
};
</script>


<style lang="scss" scoped>
.el-menu-main {
    display: flex;
    justify-content: flex-end;
}
.menu-toggle-btn {
    margin-left: 20px;
}
</style>

