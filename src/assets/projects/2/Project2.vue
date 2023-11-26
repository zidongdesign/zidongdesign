<template>
    <PageContentContainer>
        <PageInfo :title="this.title" :category="this.category" :period="this.period" :skills="this.skills" :teams="this.teams"></PageInfo>
        <PageSection>
            <p v-if="language=='ZH'" class="fade-up-enter">一些文字创意和图形设计，灵感来源于和她的一些生活日常。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Some text ideas and graphic designs are inspired by the daily life with her.</p>
            <img :src="require('@/assets/projects/2/details1.png')" alt="" class="fade-up-enter">
            <img :src="require('@/assets/projects/2/details2.png')" alt="" class="fade-up-enter">
            <img :src="require('@/assets/projects/2/details3.png')" alt="" class="fade-up-enter">
            <img :src="require('@/assets/projects/2/details4.png')" alt="" class="fade-up-enter">
            <img :src="require('@/assets/projects/2/details5.png')" alt="" class="fade-up-enter">
            <img :src="require('@/assets/projects/2/details6.png')" alt="" class="fade-up-enter">
            <img :src="require('@/assets/projects/2/details7.png')" alt="" class="fade-up-enter">
        </PageSection>
    </PageContentContainer>
</template>

<script>
    import {gsap,Power2} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({duration:0.8, ease:Power2.easeInOut,scroller:'.detail-wrapper'});
    export default {
        name: "Project2",
        props:[
            'category',
            'period',
            'title',
            'language',
            'skills',
            'teams',
        ],
        mounted(){
        }
    }
</script>

<style scoped>
</style>