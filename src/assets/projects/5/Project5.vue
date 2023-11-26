<template>
    <PageContentContainer>
        <PageInfo :title="this.title" :category="this.category" :period="this.period" :skills="this.skills" :teams="this.teams"></PageInfo>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">Overview</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Overview</h2>
            <p v-if="language=='ZH'" class="fade-up-enter">随异文化设计工作室致力于品牌创新和视觉设计。他们为中小型企业的品牌管理和市场策略提供完整的数字化的解决方案，让客户能够以一个良好的形象出现在市场上。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Seem Design Studio dedicates to brand innovation and design. To create a good image for SMEs to appear in the market, they provide customers with full ecological and digital brand management and marketing planning.</p>
            <img :src="require('@/assets/projects/5/details1.png')" alt="" class="fade-up-enter">
            <p v-if="language=='ZH'" class="fade-up-enter">每个新的品牌的出现，都充斥着不确定性。大爆炸，那是宇宙万物的的开端——代表着爆炸，混乱和光，便是那最具有代表性的概念</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">The emergence of each new brand is rife with uncertainty. So, the Big Bang, the very beginning of the university, which is about EXPLOSION, CHAOS and LIGHT, comes up in my mind.</p>
            <img :src="require('@/assets/projects/5/details2.svg')" alt="" class="fade-up-enter">
            <img :src="require('@/assets/projects/5/details3.gif')" alt="" class="fade-up-enter">
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">动态的一致性</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Dynamic Consistency</h2>
            <div class="v-stack">
                <img :src="require('@/assets/projects/5/details4.gif')" alt="" class="fade-up-enter" style="width: 100%;">
                <img :src="require('@/assets/projects/5/details5.png')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>
            <p v-if="language=='ZH'" class="fade-up-enter">P5.js 帮助我生成动态的视觉系统。在一个基础框架下，整个视觉识别可以形成无穷变化，每一个变化都反映了对系统的印象，将印象植入观众心中，而不仅仅是图案。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">P5.js helps me make the static graphic into dynamic. Under a basic framework, the logo performances a lot of variants, reflecting the feeling expressed by the framework, thus forming an impression embedded in audience’s minds.</p>
            <div style="transform: rotate(0deg);" id="group2">
                <img :src="require('@/assets/projects/5/details6.png')" alt="" id="details6" style="height: 10rem;width: auto;;position:relative;">
                <img :src="require('@/assets/projects/5/details7.png')" alt="" id="details7" style="height: 10rem;width: auto;margin-bottom: 8rem;position:relative;">
            </div>
        </PageSection>
        <PageSection>
            <div class="v-stack">
                <img :src="require('@/assets/projects/5/details8.png')" alt="" class="fade-up-enter">
                <img :src="require('@/assets/projects/5/details9.png')" alt="" class="fade-up-enter">
                <div style="width: 100%">
                    <img :src="require('@/assets/projects/5/details10.png')" alt="" style="width: calc(50% - 0.5rem);display: inline-block;margin-right: 1rem" id="details10">
                    <img :src="require('@/assets/projects/5/details11.png')" alt="" style="width: calc(50% - 0.5rem);display: inline-block" id="details11">
                </div>
            </div> 
        </PageSection>
    </PageContentContainer>
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
            'skills',
            'teams',
            'language'
        ],
        mounted(){
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
                x: - 2* document.querySelector('.project-content-container').clientWidth,
            },{
                x: - document.querySelector('.project-content-container').clientWidth, 
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
                x:0,
            },{
                x:-document.querySelector('.project-content-container').clientWidth,
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
</style>