<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/dashboard' }">活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    data() {
        return {
            levellist: null
        }
    },
    watch: {
        $route() {
            // console.log(this.$route);
        }
    }
}
</script>


<style lang="scss" scoped>
.el-breadcrumb {
    min-height: 30px;
    line-height: 30px;
    padding: 5px 10px;
    background: #eee;
}
.el-icon-arrow-right {
    color: #0354f5;
}
</style>

