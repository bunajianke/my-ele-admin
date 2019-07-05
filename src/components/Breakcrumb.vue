<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item) in levellist" :key="item.path">
            <a v-if="!item.children" @click.prevent="handleLick(item)">{{ item.meta.title }}</a>
            <span v-else @click.prevent="handleLick(item)">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    data() {
        return {
            levellist: null
        };
    },
    watch: {
        $route() {
            this.getBreadcrumb();
        }
    },
    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => {
                return item.meta && item.meta.title;
            });

            console.log(matched);
            
            const first = matched[0];

            if (!this.isDashboard(first)) {
                matched = [
                    {
                        path: "/dashboard",
                        meta: {
                            title: "首页"
                        }
                    }
                ].concat(matched);
            }

            this.levellist = matched.filter(item => {
                return (
                    item.meta &&
                    item.meta.title &&
                    item.meta.breadcrumb !== false
                );
            });
        },
        isDashboard(route) {
            const name = route && route.meta.title;
            if (!name) return false;
            return name.trim() === "首页";
        },
        handleLick(item) {
            this.$router.push(item.path);
        }
    },
    created() {
        this.getBreadcrumb();
    }
};
</script>


<style lang="scss" scoped>
.el-breadcrumb {
    min-height: 60px;
    line-height: 60px;
    padding: 0px 10px;
    box-sizing: border-box;
}
.el-icon-arrow-right {
    color: #0354f5;
}
</style>

