<template>
    <div class="vp fade-up-enter">
        <p v-if="language=='ZH'" class="label">价值宣言</p>
        <p v-else-if="language=='EN'" class="label">Value proposition</p>
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "ValueProposition",
        mounted(){

        },
        props:[
            'language'
        ]
    }
</script>

<style scoped>
    .vp {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        margin-top: 4rem;
        border: 1px var(--foreground-light-2) solid;
        padding: 2rem;
        height: fit-content;
        box-sizing: content-box;
        position: relative;
    }
    p.label{
        position: absolute;
        height: 2rem;
        left: 50%;
        top: -1rem;
        padding: 0 1rem;
        transform: translate(-50%,2px);
        background-color: var(--background-dark);
    }
</style>