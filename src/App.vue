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

<style>
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
</style>
