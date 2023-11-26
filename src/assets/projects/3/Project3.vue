<template>
    <PageContentContainer>
        <PageInfo :title="this.title" :category="this.category" :period="this.period" :skills="this.skills" :teams="this.teams"></PageInfo>
        <PageSection>
            <p v-if="language=='ZH'" class="fade-up-enter">懿翼是一家冰激凌生产公司，他们最新推出了一款茶味冰激凌，并希望设计新的包装</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Yiyi is an ice cream production company, they recently launched a tea flavored ice cream and want to design a new packaging</p>
            <img :src="require('@/assets/projects/3/details1.png')" alt="" class="fade-up-enter" id="details1">
            <p v-if="language=='ZH'" class="fade-up-enter">懿翼有一些现有的塑料杯来包装冰激凌，我们需要沿用这些塑料的杯子。出于环保的目的，我们希望我们的新包装能够尽量减少切割，并且减少粘贴用的胶水，于是我们设计了一种可以竖直包裹整个杯子的结构。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Yiyi has some existing plastic cups for ice cream, we need to use these plastic cups. For the sake of environmental protection, we wanted our new packaging to minimize cutting and reduce the glue used for sticking, so we designed a structure that can wrap the entire cup vertically.</p>
            <div class="v-stack">
                <img :src="require('@/assets/projects/3/details2.png')" alt="" class="fade-up-enter">
                <img :src="require('@/assets/projects/3/details3.png')" alt="" class="fade-up-enter" id="details3">
                <div class="h-stack">
                    <img :src="require('@/assets/projects/3/details4.png')" alt="" class="fade-up-enter" id="details4" style="flex: 1;width: calc(50% - 0.5rem);">
                    <img :src="require('@/assets/projects/3/details5.png')" alt="" class="fade-up-enter" id="details5" style="flex: 1; width: calc(50% - 0.5rem)" >
                </div>
                <img :src="require('@/assets/projects/3/details6.png')" alt="" class="fade-up-enter" id="details6">
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
        name: "Project3",
        props:[
            'category',
            'period',
            'title',
            'teams',
            'skills',
            'language'
        ],
        mounted(){
            // gsap.to('#details1',{
            //     xPercent:-50,
            //     scale:1,
            //     scrollTrigger: {
            //         trigger: '#details1',
            //         scrub: true,
            //         start:'center center',
            //         end: '+=1000',
            //         pin:true,
            //         pinType:"fixed",
            //         anticipatePin:1,
            //     }
            // });
        }
    }
</script>

<style scoped>
</style>