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
    width: 5em;
    height: 5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>

