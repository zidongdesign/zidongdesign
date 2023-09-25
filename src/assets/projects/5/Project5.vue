<template>
    <div class="project-content-container">
        <div class="info">
            <h1 class="category fade-up-enter">{{this.title}}</h1>
            <p class="time fade-up-enter">{{this.category}} {{this.period}}</p>
        </div>
        <p v-if="language=='ZH'" class="fade-up-enter">随异文化设计工作室致力于品牌创新和视觉设计。他们为中小型企业的品牌管理和市场策略提供完整的数字化的解决方案，让客户能够以一个良好的形象出现在市场上。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">Seem Design Studio dedicates to brand innovation and design. To create a good image for SMEs to appear in the market, they provide customers with full ecological and digital brand management and marketing planning.</p>
        <img :src="require('@/assets/projects/5/details1.png')" alt="" class="fade-up-enter">
        <p v-if="language=='ZH'" class="fade-up-enter">整个视觉识别围绕着大爆炸展开，这是宇宙万物的的最开始——代表着爆炸，混乱和光。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">So, the Big Bang, the very beginning of the university, which is about EXPLOSION, CHAOS and LIGHT, comes up in my mind.</p>
        <img :src="require('@/assets/projects/5/details2.svg')" alt="" class="fade-up-enter">
        <img :src="require('@/assets/projects/5/details3.gif')" alt="" class="fade-up-enter">
        <div id="group1">
            <img :src="require('@/assets/projects/5/details4.gif')" alt="" id="details4" class="fade-up-enter" >
            <img :src="require('@/assets/projects/5/details5.png')" alt="" id="details5" class="fade-up-enter" >
        </div>
        <p v-if="language=='ZH'" class="fade-up-enter">P5.js 帮助我生成动态的视觉系统。在一个基础框架下，整个视觉识别可以形成无穷变化，每一个变化都反映了对系统的印象，将印象植入观众心中，而不仅仅是图案。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">P5.js helps me make the static graphic into dynamic. Under a basic framework, the logo performances a lot of variants, reflecting the feeling expressed by the framework, thus forming an impression embedded in audience’s minds.</p>
        <div style="transform: rotate(0deg)" id="group2">
            <img :src="require('@/assets/projects/5/details6.png')" alt="" id="details6" style="height: 10rem;width: auto;transform: translate(-50%,0);left:50%;position:relative;">
            <img :src="require('@/assets/projects/5/details6.png')" alt="" id="details7" style="height: 10rem;width: auto;margin-bottom: 8rem;transform: translate(50%,0);right: 50%;position:relative;">
        </div>

        <img :src="require('@/assets/projects/5/details8.png')" alt="" class="fade-up-enter">
        <img :src="require('@/assets/projects/5/details9.png')" alt="" class="fade-up-enter">
        <div style="width: 100%">
            <img :src="require('@/assets/projects/5/details10.png')" alt="" style="width: calc(50% - 1rem);display: inline-block;margin-right: 2rem" id="details10">
            <img :src="require('@/assets/projects/5/details11.png')" alt="" style="width: calc(50% - 1rem);display: inline-block" id="details11">
        </div>
    </div>
</template>

<script>
    import {gsap,Power2} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({duration:0.8, ease:Power2.easeInOut,scroller:'.detail-wrapper'});

    export default {
        name: "Project5",
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
            gsap.utils.toArray( '.fade-left-enter' ).forEach((e)=>{
                gsap.from(e,{
                    x: 8 + 'rem',
                    opacity:0,
                    scrollTrigger: {
                        trigger: e,
                        toggleActions: 'restart none none none',
                    }
                });
            });
            gsap.to('#group2',{
                rotation:-10,
                scrollTrigger:{
                    trigger:'#group2',
                    toggleActions:'restart none none none',
                    // pin: false,
                    scrub: 2,
                    // toggleClass: "active",
                }
            })
            gsap.fromTo(('#details6'),{
                x: document.querySelector('.project-content-container').clientWidth / 2,
            },{
                x: 0 ,
                duration:0.8,
                scrollTrigger:{
                    trigger:'#details6',
                    toggleActions:'restart none none none',
                    // pin: false,
                    scrub: 2,
                    // toggleClass: "active",
                }
            });
            gsap.fromTo(('#details7'),{
                x: -document.querySelector('.project-content-container').clientWidth / 2,
            },{
                x: 0,
                duration:0.8,
                scrollTrigger:{
                    trigger:'#details7',
                    toggleActions:'restart none none none',
                    // pin: false,
                    scrub: 2,
                    // toggleClass: "active",
                }
            });
            gsap.from('#details10',{
                x: 8 + 'rem',
                opacity:0,
                scrollTrigger: {
                    trigger: '#details10',
                    toggleActions: 'restart none none none',
                }
            });
            gsap.from('#details11',{
                x: 8 + 'rem',
                opacity:0,
                scrollTrigger: {
                    trigger: '#details11',
                    toggleActions: 'restart none none none',
                    start:'32px bottom',
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
</style>