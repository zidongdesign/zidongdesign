<template>
    <div class="section">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PageSection"
    }
</script>

<style scoped>
    .section {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        border-top: 1px var(--foreground-light-3) solid;
        padding-top: 2rem;
        position: relative;
    }

</style>