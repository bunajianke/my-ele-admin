<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';

* {
    padding: 0;
    margin: 0;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
    color: #3b9a9c !important;
}
.el-scrollbar__wrap {
    overflow-x: hidden !important;
}
.el-scrollbar__thumb {
    background-color: rgba(33, 52, 88, 0.45) !important;
}
.tagview-container > .el-scrollbar__bar.is-vertical, .el-scrollbar__bar.is-vertical>div {
    display: none;
}

/* progressbar */
#nprogress .bar {
    background: $bar-color !important;
    height: 3px;
}
</style>
