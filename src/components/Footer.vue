<template>
    <div class="footer">
        <div class="v-stack" style="gap: 4rem;width: fit-content;margin: 0 auto;justify-content: center;align-items: center;">
            <h1 style="color: var(--black);"> Thank you for stopping by</h1>
            <div class="h-stack" style="gap: 2rem;align-items: center;">
                <p style="color: var(--black);opacity: 0.5;"> Stay in contact: </p>
                <LinkButton id="resume">Resume</LinkButton>
                <a href="mailto:zidong.chen@outlook.com" class="interactive-l"><LinkButton id="resume">Email me</LinkButton></a>
            </div>
            <span class='copyright' v-if="this.language==='EN'" style="font-size: 0.5rem;">© 2023 ZIDONG CHEN. All rights reserved.</span>
            <span class='copyright' v-else-if="this.language==='ZH'" style="font-size: 0.5rem;">© 2023 陈子东 版权所有</span>
        </div>
    </div>
</template>

<script>
    import LinkButton from "@/components/LinkButton.vue";

    export default {
        name: "Footer",
        components:{
            LinkButton
        },
        props:[
            'language',
        ]
    }
</script>

<style scoped>
    .footer{
        position: relative;
        width: 100%;
        height: fit-content;
        background-color: var(--background-light);
        z-index: 96;
        color: var(--foregruond-dark-1);
        padding: 8rem 2rem 4rem 2rem;
        box-sizing: border-box;
    }
</style>