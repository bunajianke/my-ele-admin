<template>
    <div v-if="!item.hidden" class="menu-wrapper">
        <el-menu-item
            v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow"
            :index="resolvePath(onlyOneChild.path)"
        >
            <Item :icon="onlyOneChild.meta.icon || (item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>

        <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
            <template slot="title">
                <Item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
            </template>
            <sidebar-item
                v-for="child in item.children"
                :key="child.path"
                :is-nest="true"
                :item="child"
                :base-path="resolvePath(child.path)"
                class="nest-menu"
            />
        </el-submenu>
    </div>
</template>

<script>
import path from "path";
import Item from './Item'
export default {
    name: "SidebarItem",
    components: {
        Item
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        isNest: {
            type: Boolean,
            default: false
        },
        basePath: {
            type: String,
            default: ""
        }
    },
    data() {
        this.onlyOneChild = null;
        return {};
    },
    methods: {
        // 路由的子路由的 hidden 属性为 false 的时候，代表有要显示的子菜单
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter(item => {
                if (item.hidden) {
                    return false;
                } else {
                    this.onlyOneChild = item;
                    return true;
                }
            });


            // 只有一个要显示的子路由，直接替代夫路由显示
            if (showingChildren.length === 1) {
                // console.log('一个子路由')
                return true;
            }

            // 没有子路由的，直接显示父级路由
            if (showingChildren.length === 0) {
                // console.log('零个子路由')
                this.onlyOneChild = {
                    ...parent,
                    path: "",
                    noShowingChildren: true
                };
                return true;
            }
            return false;
        },
        resolvePath(routePath) {
            return path.resolve(this.basePath, routePath);
        }
    },
    mounted() {
        this.hasOneShowingChild(this.item.children, this.item);
    }
};
</script>
<style lang="scss" scoped>
.el-menu--collapse {
    .el-submenu {
        & > .el-submenu__title {
            & > .el-submenu__icon-arrow {
                display: none;
            }
            & > span {
                height: 0;
                width: 0;
                overflow: hidden;
                visibility: hidden;
                display: inline-block;
            }
        }
    }
}
.nest-menu {
    background-color: #000;
}
</style>
