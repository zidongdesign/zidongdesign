<template>
    <div class="quotes-about-me">
        <Quote :name="'Dennis Poon, Former Huawei UI Design Director'" :avatar="require('@/assets/avatar/dennis.png')">
            <strong>No task is too small or too challenging for him</strong>
        </Quote>
    </div>
</template>

<script>
    export default {
        name: "QuotesAboutMe",
        
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