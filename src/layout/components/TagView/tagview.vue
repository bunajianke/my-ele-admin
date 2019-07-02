<template>
    <div class="tags-view-container">
        <el-row>
            <el-col :span="22">
                <scroll-panel class="tags-view-wrapper" ref="scrollPanel">
                    <transition-group name="el-zoom-in-bottom">
                        <router-link
                            v-for="(item) in views"
                            :key="item.path"
                            tag="span"
                            ref="tag"
                            :to="{ path: item.path, query: item.query, fullPath: item.fullPath }"
                            class="tags-view-item"
                            :class="isActive(item) ? 'active' : ''"
                            @click.middle.native="closeSelectedTag(item)"
                        >
                            {{item.meta.title}}
                            <span v-if="!item.meta.affix">
                                <i class="el-icon-close" @click.prevent="closeSelectedTag(item)"></i>
                            </span>
                        </router-link>
                    </transition-group>
                </scroll-panel>
            </el-col>
            <el-col :span="2" class="tagview-control">
                <div>
                    <el-button title="标签页个数" type="primary" circle>{{ views.length }}</el-button>
                    <el-button @click="refreshSelectedTag()" title="刷新当前标签页" type="success" icon="el-icon-refresh" circle></el-button>
                    <el-button @click="closeAllTags()" title="关闭所有标签页" type="danger" icon="el-icon-delete" circle></el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ScrollPanel from "./ScrollPanel";
import path from "path";
import { mapGetters } from "vuex";
export default {
    components: {
        ScrollPanel
    },
    data() {
        return {
            affixTags: [],
            selectedTag: {}
        };
    },
    methods: {
        closeSelectedTag(view) {
            // 记录当前点击的标签页在标签页数组的位置
            const index = this.views.indexOf(view);
            this.$store
                .dispatch("tagview/deleteView", view)
                .then(({ visitedViews }) => {
                    if (this.isActive(view)) {                        
                        // 跳转到最后一个标签页
                        // this.toLastView(visitedViews, view)

                        // 跳转到左边的标签页
                        this.toLeftView(index, visitedViews);
                    }
                });
        },
        addTags() {
            const { name } = this.$route;
            if (name) {
                this.$store.dispatch("tagview/addView", this.$route);
            }

            return false;
        },
        filterAffixTags(routes, basePath = "/") {
            let tags = [];
            routes.forEach(route => {
                if (route.meta && route.meta.affix) {
                    const tagPath = path.resolve(basePath, route.path);
                    tags.push({
                        fullPath: tagPath,
                        path: tagPath,
                        name: route.name,
                        meta: {
                            ...route.meta
                        }
                    });
                }

                if (route.children) {
                    const tmpTags = this.filterAffixTags(
                        route.children,
                        route.path
                    );

                    if (tmpTags.length >= 1) {
                        tags = [...tags, ...tmpTags];
                    }
                }
            });
            return tags;
        },
        initTags() {
            const affixTags = (this.affixTags = this.filterAffixTags(
                this.routes
            ));
            this.affixTags = affixTags.push(this.$route);

            for (const tag of affixTags) {
                if (tag.name) {
                    this.$store.dispatch("tagview/addVisitedView", tag);
                }
            }
        },
        isActive(tag) {
            return tag.path === this.$route.path;
        },
        moveToCurrentTag() {
            const tags = this.$refs.tag;
            // console.log(this.$refs.scrollPanel);

            this.$nextTick(() => {
                for (const tag of tags) {
                    if (tag.to.path === this.$route.path) {
                        // console.log(this.$route.path);
                    }
                }
            });
        },
        toLastView(visitedViews, view) {
            const latestView = visitedViews.slice(-1)[0];

            if (latestView) {
                this.$router.push(latestView.path);
            } else {
                this.$router.push("/");
            }
        },
        toLeftView(index, visitedViews) {
            if (visitedViews[index - 1]) {
                this.$router.push(visitedViews[index - 1].path);
            } else if (visitedViews.length === 1) {
                this.$router.push(visitedViews[0].path);
            } else {
                this.$router.push("/");
            }
        },
        refreshSelectedTag() {
            this.selectedTag = this.$route;
            this.$store.dispatch('tagview/deleteCachedViews', this.selectedTag).then(() => {
                const { fullPath } = this.selectedTag
                this.$nextTick(() => {
                    this.$router.replace({
                        path: '/redirect' + fullPath
                    })
                })
            })
        },
        closeAllTags() {
            this.selectedTag = this.$route;
            this.affixTags = this.filterAffixTags(this.routes);
            this.$store.dispatch('tagview/deleteAllViews').then(({ visitedViews }) => {
                if(this.affixTags.some(tag => tag.path === this.selectedTag.path)) return;
                this.toLeftView(visitedViews, this.selectedTag)
            })
        }
    },
    computed: {
        ...mapGetters({
            routes: "permission_routes",
            views: "vistiedViews"
        })

    },
    watch: {
        $route() {
            this.addTags();
            this.selectedTag = this.$route;
            this.moveToCurrentTag();
        }
    },
    mounted() {
        this.initTags();
    }
};
</script>

<style lang="scss" scoped>
.tags-view-container {
    height: 46px;
    background-color: #fff;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    white-space: nowrap;
    padding: 0 10px;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.5);
    .tags-view-wrapper {
        width: 100%;
        height: 40px;
        .tags-view-item {
            background-color: rgb(166, 131, 175);
            width: 120px;
            color: #ccc;
            display: inline-block;
            padding-left: 10px;
            height: 100%;
            line-height: 2;
            cursor: pointer;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
            border-radius: 2px 2px 0 0;
            margin: 6px 4px;
            transition: all .3s;
            &:hover .el-icon-close {
                opacity: 1;
            }
            .el-icon-close {
                transition: all 0.3s;
                float: right;
                height: 100%;
                width: 20px;
                background-color: red;
                height: 32px;
                line-height: 32px;
                text-align: center;
                opacity: 0;
            }
        }
    }
}
.active {
    background-color: #7a57d1 !important;
    color: #eee !important;
}
.el-scrollbar__view {
    height: 32px;
}
.tagview-control {
    height: 46px;
    line-height: 46px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    .el-button.is-circle {
        padding: 6px;
    }
    .el-button--success:active {
        animation: rot .4s;
    }
    .el-button--danger:active {
        animation: shake .4s;
    }
    .el-button--primary {
        width: 28px;
    }
}

@keyframes rot {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);   
    }
}
@keyframes shake {
    0% {
        transform: rotate(0deg);
        transform: translateX(0px);
    }
    25% {
        transform: rotate(30deg);
        transform: translateX(5px);
    }
    50% {
        transform: rotate(0deg);
        transform: translateX(0px);
    }
    75% {
        transform: rotate(-30deg);
        transform: translateX(-5px);
    }
    100% {
        transform: rotate(0deg);
        transform: translateX(0px);
    }
}
</style>
