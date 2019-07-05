<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
    name: 'icon-svg',
    props: {
        iconClass: {
            required: true,
            type: String
        }
    },
    computed: {
        iconName() {
            return '#icon-' + this.iconClass
        }
    }
}
</script>

<style>
.svg-icon {
    width: 1.4em;
    height: 1.4em;
    vertical-align: middle;
    padding-right: 0.6em;
    fill: currentColor;
    overflow: hidden;
}
</style>

