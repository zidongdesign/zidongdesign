<template>
    <div class="interactive-l linkbutton">
        <span style="opacity: 1; padding-bottom:2px;"><slot></slot></span>
        <img :src="require('@/assets/brand/open-new-window.svg')" alt="">
    </div>
</template>

<script>
    export default {
        name: "LinkButton"
    }
</script>

<style scoped>
    div.linkbutton{
        height: 2rem;
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        /* mix-blend-mode: difference;  */
        width: fit-content;
    }
    div.linkbutton span {
        color: var(--foreground-dark-1);
        /* mix-blend-mode: difference; */
        pointer-events: none;
    }
    div img{
        width: 1rem;
        height: 1rem;
        pointer-events: none;
    }
</style>