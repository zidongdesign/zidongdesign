<template>
    <div class="project-content-container">
        <div class="info">
            <h1 class="category fade-up-enter">{{this.title}}</h1>
            <p class="time fade-up-enter">{{this.category}} {{this.period}}</p>
        </div>
        <p v-if="language=='ZH'" class="fade-up-enter">致新医药位于浙江杭州。是一家专注于药物研发和技术服务的高新医药企业。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">Zhejiang Zhixin Pharma is located in Yuhang District, Hangzhou. It is a high-tech enterprise specializing in drug research and development and technical services.</p>
        <img :src="require('@/assets/projects/4/details1.png')" alt="" class="fade-up-enter" id="details1" style="margin-bottom: 2rem">
        <p v-if="language=='ZH'" class="fade-up-enter">我们在草图中发现，DNA的双螺旋结构刚好形成了Z的形状，交叉的双链又形成X的形状，这刚好是致新的拼音首字母，一个三维的结构开始浮现。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">We found in the sketch that the spiral structure of DNA constitutes the shape of Z, and on the two-dimensional plane, the shape of X is staggered, which happens to be the first letter of zhixin's pinyin. So, a three-dimensional shape appeared.</p>
        <img :src="require('@/assets/projects/4/details2.gif')" alt="" class="fade-up-enter">
        <div style="font-size: 0;width: 100%" >
            <div id="group4">
                <img :src="require('@/assets/projects/4/details3-1.png')" alt="" id="details3-1" style="width: calc(33.333% - 1rem);margin-right: 1.5rem" >
                <img :src="require('@/assets/projects/4/details3-2.png')" alt="" id="details3-2" style="width: calc(33.33% - 1rem);margin-right: 1.5rem" >
                <img :src="require('@/assets/projects/4/details3-3.png')" alt="" id="details3-3" style="width: calc(33.33% - 1rem)">
            </div>
            <div id="group5">
                <img :src="require('@/assets/projects/4/details3-4.png')" alt="" id="details3-4" style="width: calc(33.33% - 1rem);margin-right: 1.5rem">
                <img :src="require('@/assets/projects/4/details3-5.png')" alt="" id="details3-5" style="width: calc(33.33% - 1rem);margin-right: 1.5rem">
                <img :src="require('@/assets/projects/4/details3-6.png')" alt="" id="details3-6" style="width: calc(33.33% - 1rem)">
            </div>
        </div>
        <p v-if="language=='ZH'" class="fade-up-enter">在不同的角度下，三维物体可以形成不同的二维图形，这为视觉识别系统形成了丰富的材料。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">3D object forms different two-dimensional graphics under different viewing angles, which provides rich materials for visual identify.</p>
<!--        <div style="" id="group6">-->
<!--            <img :src="require('@/assets/projects/3/details10.png')" alt="" id="details10">-->
<!--            <img :src="require('@/assets/projects/3/details11.png')" alt="" id="details11">-->
<!--            <img :src="require('@/assets/projects/3/details12.png')" alt="" id="details12" class="fade-up-enter">-->
<!--        </div>-->
        <img :src="require('@/assets/projects/4/details4.png')" alt="" id="details4">
        <img :src="require('@/assets/projects/4/details5.png')" alt="" class="fade-up-enter" id="details5">
        <div id="group1">
            <img :src="require('@/assets/projects/4/details6.png')" alt="" class="fade-up-enter" id="details6">
            <img :src="require('@/assets/projects/4/details7.png')" alt="" class="fade-up-enter" id="details7">
            <img :src="require('@/assets/projects/4/details8.png')" alt="" id="details8">
            <img :src="require('@/assets/projects/4/details9.png')" alt="" id="details9">
        </div>
    </div>
</template>

<script>
    import {gsap,Power2} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({duration:0.8, ease:Power2.easeInOut,scroller:'.detail-wrapper'});

    export default {
        name: "Project4",
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
            const tl1  = gsap.timeline();
            tl1.fromTo('#details3-1',{y: 8 + 'rem'},{opacity:1,y:0})
                .fromTo('#details3-2',{y: 8 + 'rem'},{opacity:1,y:0},"-=0.4")
                .fromTo('#details3-3',{y: 8 + 'rem'},{opacity:1,y:0},"-=0.4")
                .fromTo('#details3-4',{y: 8 + 'rem'},{opacity:1,y:0},"-=0.4")
                .fromTo('#details3-5',{y: 8 + 'rem'},{opacity:1,y:0},"-=0.4")
                .fromTo('#details3-6',{y: 8 + 'rem'},{opacity:1,y:0},"-=0.4");
            ScrollTrigger.create({
                animation:tl1,
                trigger:'#group4',
                toggleActions: 'restart none none none',
            });
            gsap.fromTo('#details4',{
                y: -64,
            },{
                y: window.innerHeight / 2,
                scrollTrigger: {
                    trigger: '#details4',
                    toggleActions: 'restart none none none',
                    scrub: 2,
                    start:'top bottom',
                    end: '+=4000px'
                }
            });
            gsap.from('#details8',{
                x: 8 + 'rem',
                opacity:0,
                scrollTrigger: {
                    trigger: '#details8',
                    toggleActions: 'restart none none none',
                }
            });
            gsap.from('#details9',{
                x: 8 + 'rem',
                opacity:0,
                scrollTrigger: {
                    trigger: '#details9',
                    toggleActions: 'restart none none none',
                }
            });
        },
        beforeDestroy(){
            const triggers = ScrollTrigger.getAll();
            triggers.forEach((trigger) => {
                // 把 ScrollTrigger 綁定的動畫消除
                trigger.kill();
            });
            // 消除綁定 MatchMedia();
            ScrollTrigger.clearMatchMedia();
        },
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
    #details4{
        width: 100vw;
        position: relative;
        left: 0;
    }
    #group4 img{
        opacity: 0;
    }
    #group5 img{
        opacity: 0;
    }
    #group1{
        width: calc(100% - 4rem);
        font-size: 0;
        margin-top: 2rem;
        display: grid;
        grid-template-rows: repeat(3, 33.33%);
        grid-template-columns: repeat(3, 33.33%);
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;
        padding-bottom: 4rem;
    }
    #group6 img{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        box-sizing: content-box;
        padding-top: 0;
    }
    #details6{
        padding-top: 0;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
        align-self:stretch;
        object-fit:contain;
        background-color: #fff;
    }
    #details7{
        padding-top: 0;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        align-self:stretch;
        object-fit:contain;
        background-color: #f3f3f3;
    }
    #details8{
        padding-top: 0;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
        align-self:stretch;
        object-fit:contain;
        background-color: #f3f3f3;
    }
    #details9 {
        padding-top: 0;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 4;
        align-self:stretch;
        object-fit:contain;
        background-color: #f3f3f3;
    }
</style>