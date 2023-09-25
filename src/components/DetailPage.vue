<template>
    <div class="details-page">
        <div class="back-button interactive-l" @click="closeDetailPage">
<!--            <img src="../assets/icon-close.svg" alt="">-->
            <h3 v-if="language=='ZH'" class="back-words">返回</h3>
            <h3 v-else-if="language=='EN'" class="back-words">Back</h3>
        </div>
        <div class="detail-wrapper">
            <div class="detail-container" id="detail-container">
                <div class="intro-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
                        <defs>
                            <filter id="goo-3">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="	1 0 0 0 0
																			0 1 0 0 0
																			1 0 1 0 0
																			0 0 0 15 -8" result="goo"></feColorMatrix>
                                <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                            </filter>
                        </defs>
                    </svg>
                    <div class="loading-bar">
                        <div class="loaded-bar"></div>
                    </div>
                    <div class="percent-scroll">
                        <h2 class="percent">{{fixedPercent}}</h2>
                        <h3 v-if="language=='ZH'" class="scroll">滚动浏览更多</h3>
                        <h3 v-else-if="language=='EN'" class="scroll">SCROLL TO VIEW MORE</h3>
                    </div>
                </div>
                <div class="content">
                    <div v-if="language=='ZH'" :is="projectContent" :period = 'this.period' :category = 'this.category.ZH' :title='this.title.ZH' :language='this.languageDetailsPage'></div>
                    <div v-else-if="language=='EN'" :is="projectContent" :period = 'this.period' :category = 'this.category.EN' :title='this.title.EN' :language='this.languageDetailsPage'></div>
                </div>
            </div>
        </div>
        <div class="details-background"></div>
    </div>


</template>

<script>
    import {gsap,Power2} from 'gsap'
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

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

            // window.addEventListener('popstate',this.closeDetailPage());
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
            isMobile : function () {
                return window.matchMedia('(max-width: 767px)').matches
            },
            languageDetailsPage :function () {
                return this.language
            }
        },
        watch:{
            loadingPercent:function(newValue) {
                gsap.to(this.$data, {
                    duration: 0.8,
                    tweenPercent: newValue,
                    onUpdate:()=>{
                        gsap.set('.loaded-bar',{
                            width: this.tweenPercent + '%',
                        });
                    },
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
                gsap.to(('.scroll'),{
                    duration:0,
                    opacity:0,
                    ease:Power2.easeInOut
                });
                gsap.to(('.percent'),{
                    duration:0,
                    opacity:1,
                    ease:Power2.easeInOut
                });
                let index = this.projects.findIndex(function (item) {
                    return item.id == i;
                });
                this.loadImage(index);
            },
            AllImagesLoaded(){
                this.$emit('allImagesLoaded');
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
                gsap.to('.percent',{
                    duration: 0.4,
                    opacity: 0,
                    onComplete:()=>{
                        gsap.to('.scroll', {
                            duration: 0.4,
                            opacity: 1,
                            onComplete:()=>{
                                document.querySelector('.detail-wrapper').style.overflowY = 'scroll';
                                gsap.fromTo('.scroll',{
                                    opacity:1,
                                },{
                                    opacity:0,
                                    scrollTrigger:{
                                        trigger:'.intro-wrapper',
                                        start:'top top',
                                        scrub:true,
                                        toggleActions:'none none none none'
                                    }
                                });
                                gsap.fromTo('.loading-bar',{
                                    opacity:1,
                                },{
                                    opacity:0,
                                    scrollTrigger:{
                                        trigger:'.intro-wrapper',
                                        start:'top top',
                                        scrub:true,
                                        toggleActions:'none none none none'
                                    }
                                });
                            }
                        });
                    }
                });
                this.projectContent = this.projects[this.preloadIndex].details;
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
                        document.querySelector('.scroll').style.opacity = 0;
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
        overflow-scrolling: auto;
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
        height: 100vh;
        position: relative;
        /*mix-blend-mode:difference;*/
    }
    .percent-scroll{
        /*filter: url('#goo-3');*/
        position: fixed;
        bottom: 2rem;
        font-size: 2rem;
        text-align: center;
        width: 100vw;
        height: 4rem;
    }
    .percent{
        position: absolute;
        left: 50%;
        transform: translate(-50%,0);
        bottom: 1rem;
        font-size: 2rem;
        color: var(--white);
        opacity: 0;
        z-index: 2;
        /*mix-blend-mode:difference;*/
        font-weight: 400;
    }
    .scroll{
        position: absolute;
        left: 50%;
        transform: translate(-50%,0);
        bottom: 1rem;
        font-size: 1rem;
        color: var(--white);
        opacity: 0;
        z-index: 2;
        /*mix-blend-mode:difference;*/
    }
    .content{
        /*background: var(--background-color);*/
        width: 100%;
        font-size: 0;
        box-sizing: border-box;
        mix-blend-mode:normal;
        isolation: isolate;
    }
    .back-button{
        /*background-color: var(--background-color);*/
        position: fixed;
        top: 2rem;
        left: calc(50% - 2.5rem);
        width: 4rem;
        height: 1rem;
        z-index: 96;
        padding: 0.5rem;
        border: 1px rgba(255,255,255,1) solid;
        mix-blend-mode:difference;
    }
    .back-words{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 1rem;
        padding: 1rem;
        color: var(--white);
        z-index: 2;
        mix-blend-mode:difference;
        pointer-events: none;
        word-break: keep-all;
    }
    .details-background {
        width: 100%;
        height: 100%;
        background: var(--background-color);
        opacity: 0;
        position: fixed;
        left: 0;
        top: 0;
        pointer-events: none;
        z-index: 94;
    }
    .loading-bar{
        display: block;
        width: 80%;
        height: 1px;
        position: fixed;
        bottom: 6rem;
        left: 10%;
        background: rgba(255,255,255,0.2);
        /*mix-blend-mode:difference;*/
    }
    .loaded-bar{
        width: 0;
        height: 1px;
        background: #fff;
    }

</style>