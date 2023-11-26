<template>
    <div class="details-page">
        <div class="changing-project-cover"></div>
        <div class="sticky-top-bg" style="width: 100%;position: fixed;height: 5rem;background: var(--background-dark);z-index: 96;left: 0;top: 0;opacity: 0;"></div>
        <div class="back-button interactive-l h-stack" @click="closeDetailPage">
            <img :src="require('@/assets/brand/back.svg')" alt="" style="width: 1rem; height: 1rem;">
            <p v-if="language=='ZH'" class="back-words">返回</p>
            <p v-else-if="language=='EN'" class="back-words">Back</p>
        </div>
        <div class="detail-wrapper">
            <div class="detail-container" id="detail-container">
                <div class="intro-wrapper">
                    <h2 class="percent">{{fixedPercent}}</h2>
                </div>
                <div class="content">
                    <div v-if="language=='ZH'" :is="projectContent" :period = 'this.period' :category = 'this.category.ZH' :title='this.title.ZH' :skills="this.skills.ZH" :teams="this.teams.EN" :language='this.languageDetailsPage' ></div>
                    <div v-else-if="language=='EN'" :is="projectContent" :period = 'this.period' :category = 'this.category.EN' :title='this.title.EN' :skills="this.skills.EN" :teams="this.teams.EN" :language='this.languageDetailsPage'></div>
                    <RelatedProject :relatedProjectsID="this.relatedID" :language="this.language" @changeProject="changeProject" class="related-project"></RelatedProject>
                </div>

            </div>
        </div>
        <div class="details-background"></div>
    </div>


</template>

<script>
    import {gsap,Power2} from 'gsap'
    import {ScrollTrigger} from "gsap/ScrollTrigger";
    import { ScrollToPlugin } from "gsap/ScrollToPlugin";

    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

    export default {
        name: "DetailPage",
        data(){
            return{
                scrollbar : null,
                images :[],
                loadingPercent:0,
                tweenPercent:0,
                preloadIndex:0,
                projectContent:null,
                isOpenDetailPage:false,
                scrollFilter:null,
                primitiveValues:{stdDeviation:0},
            }
        },
        mounted(){
            document.querySelector('.detail-wrapper').addEventListener('scroll',()=>{
                ScrollTrigger.refresh()
            });
            gsap.to('.back-button',{
                y:-100,
                duration:0,
            });

        },
        computed:{
            detailsImages: function () {
                return this.projects[this.preloadIndex].detailsImages
            },
            fixedPercent:function () {
                return this.tweenPercent.toFixed(0);
            },
            title:function () {
                return this.projects[this.preloadIndex].title;
            },
            period:function () {
                return this.projects[this.preloadIndex].period;
            },
            category:function () {
                return this.projects[this.preloadIndex].category;
            },
            skills:function(){
                return this.projects[this.preloadIndex].skills;
            },            
            teams:function(){
                return this.projects[this.preloadIndex].teams;
            },
            isMobile : function () {
                return window.matchMedia('(max-width: 767px)').matches
            },
            languageDetailsPage :function () {
                return this.language
            },
            relatedID:function(){
                if(this.projects[this.preloadIndex].relatedID){
                    return this.projects[this.preloadIndex].relatedID;
                }else{
                    return [0]
                }
            }
        },
        watch:{
            loadingPercent:function(newValue) {
                gsap.to(this.$data, {
                    duration: 0.8,
                    tweenPercent: newValue,
                    onComplete:()=>{
                        if( this.fixedPercent == 100){
                            if(!this.isOpenDetailPage){
                                return;
                            }
                            this.AllImagesLoaded();
                        }
                    }
                });
            }
        },
        props:['language','projects'],
        methods:{
            open(i){
                this.isOpenDetailPage = true;
                let index = this.projects.findIndex(function (item) {
                    return item.id == i;
                });
                this.loadImage(index);
            },
            AllImagesLoaded(){
                this.$emit('allImagesLoaded');
                gsap.to('.percent',{
                    duration: 0.4,
                    opacity: 0
                });
                gsap.fromTo('.details-background',{
                    opacity:0,
                },{
                    opacity:1,
                    scrollTrigger:{
                        trigger:'.intro-wrapper',
                        start:'top top',
                        scrub:true,
                        toggleActions:'none none none none'
                    }
                });
                gsap.fromTo('.sticky-top-bg',{
                    opacity:0,
                },{
                    opacity:1,
                    scrollTrigger:{
                        trigger:'.intro-wrapper',
                        start:'top top-=400',
                        scrub:true,
                        toggleActions:'none none none none'
                    }
                });
                document.querySelector('.detail-wrapper').style.overflowY = 'scroll';
                this.projectContent = this.projects[this.preloadIndex].details;
                document.querySelector('.related-project').style.display = 'block';
                gsap.to('.detail-wrapper',
                {
                    scrollTo:document.querySelector('.content').getBoundingClientRect().top - 80,
                    duration:1.6,
                    ease:Power2.easeInOut
                })

            },
            changeProject(e){
                gsap.to('.changing-project-cover',{
                    opacity:1,
                    duration:0.2,
                    onComplete:()=>{
                        this.$emit('changeProject',e);
                        this.closeDetailPage()
                    }
                });
            },
            closeDetailPage(){
                this.$emit('closeDetailPage');
                gsap.to('.back-button',{
                    y:-100,
                    duration:0.2,
                    ease:Power2.easeInOut,
                });
                gsap.to('.details-background',{
                    opacity:0,
                    duration:0.2,
                });
                gsap.to(('.detail-wrapper'),{
                    duration:0,
                    opacity:0,
                    onComplete:()=>{
                        const triggers = ScrollTrigger.getAll();
                        triggers.forEach((trigger) => {
                            // 把 ScrollTrigger 綁定的動畫消除
                            trigger.kill();
                        });
                        // 消除綁定 MatchMedia();
                        ScrollTrigger.clearMatchMedia();
                        this.projectContent = null;
                        document.querySelector('.detail-wrapper').style.overflowY = 'hidden';
                        this.isOpenDetailPage = false;
                        this.images = [];
                        this.loadingPercent = 0;
                        document.querySelector('.detail-wrapper').style.scrollTop = 0;
                        document.querySelector('.detail-wrapper').style.display = 'none';
                        document.querySelector('.related-project').style.display = 'none';
                    }
                });
            },

            loadImage(i){
                this.preloadIndex = i;
                this.preload(this.detailsImages, ()=> {
                });
            },
            preload(images, allImagesLoadedCallback) {
                let loadedCounter = 0;
                const toBeLoadedNumber = images.length;
                const preloadImage = (i,t, anImageLoadedCallback) => {
                    const image = new Image();
                    image.src = t;
                    image.onload =()=> {
                        if(this.isOpenDetailPage){
                            this.images[i] = image;
                            anImageLoadedCallback();
                        }
                    }

                };
                for(let i = 0; i< toBeLoadedNumber;i++){
                    preloadImage(i,images[i], () => {
                        loadedCounter += 1;
                        this.loadingPercent =loadedCounter / toBeLoadedNumber * 100;
                        if (loadedCounter === toBeLoadedNumber) {
                            allImagesLoadedCallback()
                        }
                    })
                }
            },
        },
    }
</script>

<style scoped>
    .details-page {
        width: 100%;
        height: 100%;
        right: 0;
        bottom: 0;
        position: absolute;
        overflow: hidden;
    }
    .detail-wrapper{
        width: calc(100%);
        height: 100%;
        left: 0rem;
        bottom: 0;
        position: absolute;
        z-index: 95;
        display: none;
        overflow-y: hidden;
        overflow-x: hidden;
        margin-block-end: 0;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
        -webkit-overflow-scrolling: auto; /* 用来控制元素在移动设备上是否使用滚动回弹效果 */
    }
    .detail-wrapper::-webkit-scrollbar{
        display: none; /* Chrome Safari */
    }
    .detail-container{
        width: 100%;
        position: relative;
        z-index: 2;
        box-sizing: border-box;
    }
    .intro-wrapper{
        width: 100%;
        max-width: 768px;
        margin: 0 auto;
        height: 100vh;
        position: relative;
    }
    .percent{
        position: fixed;
        left: 2rem;
        bottom:2rem;
        font-size: 2rem;
        color: var(--foreground-light-1);
        opacity: 0;
        z-index: 2;
        mix-blend-mode:difference;
        font-weight: 400;
    }
    .content{
        width: 100%;
        font-size: 0;
        box-sizing: border-box;
        mix-blend-mode:normal;
        isolation: isolate;
    }
    .back-button{
        /*background-color: var(--background-dark);*/
        position: fixed;
        top: 2rem;
        left: 10rem;
        z-index: 96;
        border-left: 1px var(--foreground-light-4) solid;
        mix-blend-mode:difference;
        color: var(--foreground-light-2);
        width: fit-content;
        padding: 0.25rem 1rem;
        justify-content: center;
        align-items: center;
        height: 2rem;
        box-sizing: border-box;
    }
    .back-words{
        color: var(--foreground-light-2);
        z-index: 2;
        mix-blend-mode:difference;
        pointer-events: none;
        word-break: keep-all;
        padding-bottom: 2px;
    }
    .details-background {
        width: 100%;
        height: 100%;
        background: var(--background-dark);
        opacity: 0;
        position: fixed;
        left: 0;
        top: 0;
        pointer-events: none;
        z-index: 94;
    }

    .changing-project-cover{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: var(--background-dark);
        top: 0;
        opacity: 0;
        z-index: 100;
        pointer-events: none;
    }
</style>