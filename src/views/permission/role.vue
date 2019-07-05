<template>
    <div>
        <div class="flex-box">
            <div class="box-1"></div>
            <div class="box-2"></div>
            <div class="box-3"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flex-box {
    display: flex;
    flex-direction: column;
    height: 300px;
    div {
        width: 100%;
    }
}
.box-1 {
    height: 100px;
    background-color: #eee;
}
.box-2 {
    min-height: 50px;
    background-color: #ccc;
    flex: 1;
}
.box-3 {
    height: 100px;
    background-color: #999;
}
</style>
