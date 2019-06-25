<template>
    <section class="app-main">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </section>
</template>

<style lang="scss" scoped>
.app-main {
    min-height: calc(100vh - 137px);
    box-sizing: border-box;
}
</style>
