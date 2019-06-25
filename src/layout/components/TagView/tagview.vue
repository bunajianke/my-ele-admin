<template>
    <div class="tags-view-container">
        <scroll-panel class="tags-view-wrapper">
            <router-link
                v-for="(item, index) in list"
                :key="index"
                class="tags-view-item"
                tag="span"
                :to="{ path: '/' }"
            >
                {{item}}
                <span>
                    <i class="el-icon-close" @click.prevent="closeSelectedTag"></i>
                </span>
            </router-link>
        </scroll-panel>
    </div>
</template>

<script>
import ScrollPanel from "./ScrollPanel";
export default {
    components: {
        ScrollPanel
    },
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        };
    },
    methods: {
        closeSelectedTag() {
            console.log("close");
        }
    }
};
</script>

<style lang="scss" scoped>
.tags-view-container {
    height: 46px;
    background-color: #fff;
    width: 100%;
    padding: 6px 10px 0;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    box-sizing: border-box;
    white-space: nowrap;
    margin-bottom: 10px;
    .tags-view-wrapper {
        width: 100%;
        height: 40px;
        .tags-view-item {
            background-color: #7a57d1;
            width: 120px;
            color: #eee;
            display: inline-block;
            padding-left: 10px;
            height: 100%;
            line-height: 2;
            cursor: pointer;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
            border-radius: 2px 2px 0 0;
            margin: 0 2px;
            &:hover .el-icon-close {
                opacity: 1;
            }
            .el-icon-close {
                transition: all .3s;
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
</style>
