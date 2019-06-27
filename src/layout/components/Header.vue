<template>
    <el-row type="flex" justify="center">
        <el-col :span="1">
            <i class="el-icon-s-fold" :class="{ 'menu-active': !sidebar.opened }" @click="toggleSidebar"></i>
        </el-col>
        <el-col :span="13">
            <Breakcrumb />
        </el-col>
        <el-col :span="10">
            <el-menu
                default-active="1"
                class="el-menu-main"
                mode="horizontal"
                :background-color="style.headerBg"
                text-color="#fff"
                :active-text-color="style.headerAct"
            >
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="/dashboard">选项1</el-menu-item>
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
import Breakcrumb from '@/components/Breakcrumb'
import style from '@/styles/variables.scss'
export default {
    components: {
        Breakcrumb
    },
    data() {
        return {};
    },
    methods: {
        ...mapActions({
            toggleSidebar: 'app/toggleSidebar'
        })
    },
    computed: {
        ...mapGetters(["sidebar"]),
        style() {
            return style
        }
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
.el-col-1 {
    text-align: center;
    flex: 1;
    min-width: 50px;
}
.el-icon-s-fold {
    color: #fff;
    font-size: 28px;
    line-height: 60px;
    cursor: pointer;
    transition: all .3s;
}
.menu-active {
    transform: rotate(-180deg);
}
</style>

