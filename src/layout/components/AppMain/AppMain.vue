<template>
    <section class="app-main">
        <keep-alive :include="cachedViews">
            <router-view :key="key"></router-view>
        </keep-alive>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(['cachedViews']),
        key() {
            return this.$route.fullPath
        }
    }
}
</script>


<style lang="scss" scoped>
.app-main {
    height: calc(100vh - 106px);
    box-sizing: border-box;
    overflow: scroll;
    overflow-x: hidden;
    padding: 10px;
    box-sizing: border-box;
}
</style>
