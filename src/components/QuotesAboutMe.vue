<template>
    <div class="quotes-about-me">
        <h2 v-if="language=='ZH'" class="" style="color: var(--foreground-light-1);text-align: center;">他们如何评价我</h2>
        <h2 v-else-if="language=='EN'" class="" style="color: var(--foreground-light-1);text-align: center;">How they assess me</h2>
        <Quote :name="'Dennis Poon, Former Huawei UI Design Director'" :avatar="require('@/assets/avatar/dennis.png')">
            <strong>No task is too small or too challenging for him</strong>
        </Quote>
    </div>
</template>

<script>
    export default {
        name: "QuotesAboutMe",
        props:[
            'language'
        ]
        
    }
</script>

<style scoped>
    .quotes-about-me{
        position: relative;
        width: 100%;
        height: fit-content;
        background-color: var(--background-dark);
        z-index: 96;
        color: var(--foregruond-dark-1);
        padding: 8rem 2rem 4rem 2rem;
        box-sizing: border-box;
    }
    Quote{
        max-width: 33%;
    }
</style>