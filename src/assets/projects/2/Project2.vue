<template>
    <div class="project-content-container">
        <div class="info">
            <h1 class="category fade-up-enter">{{this.title}}</h1>
            <p class="time fade-up-enter">{{this.category}} {{this.period}}</p>
        </div>
        <p v-if="language=='ZH'" class="fade-up-enter">一些文字创意和图形设计，灵感来源于和她的一些生活日常。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">Some text ideas and graphic designs are inspired by the daily life with her.</p>
        <img :src="require('@/assets/projects/2/details1.png')" alt="" class="fade-up-enter">
        <img :src="require('@/assets/projects/2/details2.png')" alt="" class="fade-up-enter">
        <img :src="require('@/assets/projects/2/details3.png')" alt="" class="fade-up-enter">
        <img :src="require('@/assets/projects/2/details4.png')" alt="" class="fade-up-enter">
        <img :src="require('@/assets/projects/2/details5.png')" alt="" class="fade-up-enter">
        <img :src="require('@/assets/projects/2/details6.png')" alt="" class="fade-up-enter">
        <img :src="require('@/assets/projects/2/details7.png')" alt="" class="fade-up-enter">
    </div>
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
            'language'
        ],
        mounted(){
            gsap.utils.toArray( '.fade-up-enter' ).forEach((e)=>{
                gsap.from(e,{
                    y: 8 + 'rem',
                    opacity:0,
                    scrollTrigger: {
                        trigger: e,
                        toggleActions: 'restart none none none',
                    }
                });
            });
        }
    }
</script>

<style scoped>
    .project-content-container{
        padding: 0 2rem 4rem 2rem;
        margin: 0 auto;
        color: var(--white);
        width: 100%;
        max-width: 768px;
        position: relative;
        box-sizing: border-box;
    }
    .info{
        padding: 4rem 0;
    }
    .time {
        padding-top: 2rem;
    }
    p{
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    img {
        width: 100%;
        padding-top: 2rem;
    }
</style>