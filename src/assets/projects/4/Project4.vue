<template>
    <PageContentContainer>
        <PageInfo :title="this.title" :category="this.category" :period="this.period" :skills="this.skills" :teams="this.teams"></PageInfo>
        <PageSection>
            <p v-if="language=='ZH'" class="fade-up-enter">致新医药位于浙江杭州。是一家专注于药物研发和技术服务的高新医药企业。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Zhejiang Zhixin Pharma is located in Yuhang District, Hangzhou. It is a high-tech enterprise specializing in drug research and development and technical services.</p>
            <img :src="require('@/assets/projects/4/details1.png')" alt="" class="fade-up-enter" id="details1" style="margin-bottom: 2rem">
            <p v-if="language=='ZH'" class="fade-up-enter">我们在草图中发现，DNA的双螺旋结构刚好形成了Z的形状，交叉的双链又形成X的形状，这刚好是致新的拼音首字母，一个三维的结构开始浮现。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">We found in the sketch that the spiral structure of DNA constitutes the shape of Z, and on the two-dimensional plane, the shape of X is staggered, which happens to be the first letter of zhixin's pinyin. So, a three-dimensional shape appeared.</p>
            <img :src="require('@/assets/projects/4/details2.gif')" alt="" class="fade-up-enter">
            <div style="font-size: 0;width: 100%; display: flex;gap: 1rem;flex-direction: column;">
                <div id="group4" style="display: flex;flex-direction: row;width: 100%;gap: 1rem;">
                    <img :src="require('@/assets/projects/4/details3-1.png')" alt="" id="details3-1" style="flex: 1 1 0;align-self: stretch;object-fit: cover;width: calc(33.333% - 0.666rem);" >
                    <img :src="require('@/assets/projects/4/details3-2.png')" alt="" id="details3-2" style="flex: 1 1 0;align-self: stretch;object-fit: cover;width: calc(33.333% - 0.666rem);" >
                    <img :src="require('@/assets/projects/4/details3-3.png')" alt="" id="details3-3" style="flex: 1 1 0;align-self: stretch;object-fit: cover;width: calc(33.333% - 0.666rem);">
                </div>
                <div id="group5" style="display: flex;flex-direction: row;width: 100%;gap: 1rem;">
                    <img :src="require('@/assets/projects/4/details3-4.png')" alt="" id="details3-4" style="flex: 1 1 0;align-self: stretch;object-fit: cover;width: calc(33.333% - 0.666rem);">
                    <img :src="require('@/assets/projects/4/details3-5.png')" alt="" id="details3-5" style="flex: 1 1 0;align-self: stretch;object-fit: cover;width: calc(33.333% - 0.666rem);">
                    <img :src="require('@/assets/projects/4/details3-6.png')" alt="" id="details3-6" style="flex: 1 1 0;align-self: stretch;object-fit: cover;width: calc(33.333% - 0.666rem);">
                </div>
            </div>
            <p v-if="language=='ZH'" class="fade-up-enter">在不同的角度下，三维物体可以形成不同的二维图形，这为视觉识别系统形成了丰富的材料。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">3D object forms different two-dimensional graphics under different viewing angles, which provides rich materials for visual identify.</p>
            <img :src="require('@/assets/projects/4/details4.png')" alt="" id="details4">
            <div class="v-stack" id="details5">
                <img :src="require('@/assets/projects/4/details5.png')" alt="" class="fade-up-enter" >
                <div class="h-stack" id="group1" style="width: 100%; height: 560px; position: relative;">
                    <div class="v-stack" style="align-self: stretch;flex: 1 1 0;width: 100%;">
                        <div class="h-stack" style="width: 100%; align-self: stretch;">
                            <img :src="require('@/assets/projects/4/details6.png')" alt="" class="fade-up-enter" id="details6" style="height: auto;width: calc(50% - 0.5rem);object-fit: fill;object-fit: cover;">
                            <img :src="require('@/assets/projects/4/details7.png')" alt="" class="fade-up-enter" id="details7" style="height: auto;width: calc(50% - 0.5rem);object-fit: fill;object-fit: cover;">
                        </div>
                        <img :src="require('@/assets/projects/4/details8.png')" alt="" id="details8" style="align-self: stretch;flex: 1 1 0;width: 100%;object-fit: cover;" class="fade-up-enter">
                    </div>
                    <img :src="require('@/assets/projects/4/details9.png')" alt="" id="details9" style="align-self: stretch;flex: 1 1 0;object-fit: cover;width: calc(30% - 1rem);" class="fade-up-enter">
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
        name: "Project4",
        props:[
            'category',
            'period',
            'skills',
            'teams',
            'title',
            'language'
        ],
        mounted(){
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
    #details4{
        width: 100vw;
        position: relative;
        left: 0;
    }
</style>