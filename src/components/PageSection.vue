<template>
    <div class="section">
        <div class="border-top"></div>
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "PageSection",
        mounted(){

        },
    }
</script>

<style scoped>
    .section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-top: 2rem;
        position: relative;
    }
    .border-top{
        width: 100%;
        height: 1px;
        background: var(--foreground-light-4);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
</style>