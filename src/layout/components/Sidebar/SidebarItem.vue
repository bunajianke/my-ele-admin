<template>
    <div class="menu-wrapper">
        <!-- 嵌套子菜单 -->
        <!-- <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="/dashboard">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        
        </el-submenu> -->
        <!-- 无嵌套子菜单 -->
        <!-- <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item> -->

        <el-menu-item index="">
            <i class="el-icon-menu"></i>
            <span slot="title">123</span>
        </el-menu-item>
    </div>
</template>

<script>
export default {
    name: 'SidebarItem',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    mounted() {
        // console.log(this.item);
        
    }
}
</script>
