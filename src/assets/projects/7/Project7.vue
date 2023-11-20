<template>
    <PageContentContainer>
        <PageInfo :title="this.title" :category="this.category" :period="this.period" :skills="this.skills" :tools="this.tools"></PageInfo>
        <div style="background-color: #fefefe;border-radius: 1rem;padding:0 2rem;display: flex;width: calc(100% - 4rem)" class="fade-up-enter">
            <img :src="require('@/assets/projects/7/reddot.svg')" alt="" id="reddot"  style="flex: 1;position: relative;min-width:0;margin: 2rem;padding-top: 0">
            <img :src="require('@/assets/projects/7/web-summit.png')" alt="" id="web-summit"  style="flex: 1;position: relative;min-width:0;margin: 2rem;padding-top: 0">
        </div>
        <p v-if="language=='ZH'" class="fade-up-enter">RaceFit International, 是一家专注于动作捕捉技术的硬件公司，他们希望能够借助他们的产品RaceFit CORE，为用户提供一种全新的智能健身体验。为了将硬件佩戴在身体上，我们需要为已经生产的圆形动作传感器——CORE 设计配件，以应对各种场合的不同需求。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">RaceFit International, a hardware company focused on smart technology, wants to use a brand new product, RaceFit CORE, that they can provide users with a physical fitness experience. Shape Motion Sensors - CORE designs accessories to meet the different needs of various occasions.</p>
        <p v-if="language=='ZH'" class="fade-up-enter">通过分析和讨论，我们将硬件穿戴在身上的方式划分为三种</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">Through analysis and discussion, we divide the way the hardware is worn on the body into three</p>
        <img :src="require('@/assets/projects/7/details1.svg')" alt="" id="details1" class="fade-up-enter" style="width: 100%;">
        <p v-if="language=='ZH'" class="fade-up-enter">我们首先研发了嵌入式和绑带式的产品，并推出了市场。下面的视频可以帮助您更好地了解这两个配件结合手机应用如何帮助用户在体育运动中获得更好的体验</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">We first developed embedded and strap-on products and launched them to the market. The video below can help you better understand how these two accessories combined with the mobile app can help users have a better experience in sports</p>
        <video controls width="100%" :poster="require('@/assets/projects/7/what-is-a-core.png')" class="fade-up-enter" style="margin-bottom: 2rem">
            <source src="./What_is_a_CORE.mp4"
                    type="video/mp4">
        </video>

        <div style="font-size: 0">
            <div id="suit" style="width: calc(100% + 4rem);position: relative;left: -2rem" class="fade-up-enter">
                <img :src="require('@/assets/projects/7/details2.png')" alt="" id="details2"  style="width: calc(100%);padding-top: 0">
                <div id="suit-content" style="background-color: #FF6666;padding: 0 2rem;height: 0;overflow: hidden;">
                    <div style="border-radius: 1rem;width: 100%;height:calc(100vw - 4rem);background-color: var(--background-light);">
                        <iframe src='https://my.spline.design/untitled-818928627c12c7c1e33b432013d7079f/' frameborder='0' width='100%' height='100%'></iframe>
                    </div>
                    <div style="display: grid;
                                width: calc( 100% - 1rem);
                                padding-top: 1rem;
                                padding-bottom: calc(4rem + 7vw);
                                grid-template-columns: repeat(2, 50%);
                                grid-template-rows: repeat(2, auto);
                                grid-row-gap: 1rem;
                                grid-column-gap: 1rem;">
                        <div id="suit01" class="fade-up-enter" style="grid-column-start: 1;grid-column-end: 3;grid-row-start: 1;grid-row-end: 2;var(--background-light);border-radius: 1rem">
                            <img :src="require('@/assets/projects/7/suit01.svg')" alt="" style="width:100%;height: 100%;padding:2rem;box-sizing: border-box;object-fit:contain">
                        </div>
                        <div id="suit02" class="fade-up-enter" style="grid-column-start: 1;grid-column-end: 2;grid-row-start: 2;grid-row-end: 3;var(--background-light);border-radius: 1rem">
                            <img :src="require('@/assets/projects/7/suit02.png')" alt="" style="width:100%;height: 100%;padding:2rem;box-sizing: border-box;object-fit:contain">
                        </div>
                        <div id="suit03" class="fade-up-enter" style="grid-column-start: 2;grid-column-end: 3;grid-row-start: 2;grid-row-end: 3;var(--background-light);border-radius: 1rem;position: relative;overflow: hidden">
                            <img :src="require('@/assets/projects/7/suit03.png')" style="width: calc(90%);position: absolute;right: 0;top: 0;margin-top: 0;padding-top:0; object-fit:contain" >
                        </div>
                    </div>
                </div>
            </div>
            <div id="band" style="width: calc(100% + 4rem);position: relative;left: -2rem;top:-7vw" class="fade-up-enter">
                <img :src="require('@/assets/projects/7/details3.png')" alt="" id="details3"  style="width: calc(100%);padding-top: 0">
                <div id="band-content" style="background-color: #66B2FF;padding: 0 2rem;height: 0;overflow: hidden">
                    <div style="border-radius: 1rem;width: 100%;height:calc(100vw - 4rem);var(--background-light);">
                        <iframe src='https://my.spline.design/suitholder-8bc579e20bede6b7126564da1ec0a83b/' frameborder='0' width='100%' height='100%'></iframe>
                    </div>
                    <div style="display: grid;
                                width: calc( 100% - 1rem);
                                padding-top: 1rem;
                                padding-bottom: calc(4rem + 7vw);
                                grid-template-columns: repeat(2, 50%);
                                grid-template-rows: repeat(5, auto);
                                grid-row-gap: 1rem;
                                grid-column-gap: 1rem;">
                        <div id="band01" class="fade-up-enter" style="grid-column-start: 1;grid-column-end: 2;grid-row-start: 1;grid-row-end: 4;var(--background-light);border-radius: 1rem">
                            <img :src="require('@/assets/projects/7/band01.png')" alt="" style="width:100%;height: 100%;box-sizing: border-box;object-fit:contain;padding-top: 0">
                        </div>
                        <div id="band02" class="fade-up-enter" style="grid-column-start: 2;grid-column-end: 3;grid-row-start: 1;grid-row-end: 3;var(--background-light);border-radius: 1rem">
<!--                            <img :src="require('@/assets/projects/7/band03.png')" alt="" style="width:100%;height: 100%;padding:2rem;box-sizing: border-box;object-fit:contain;">-->
                        </div>
                        <div id="band03" class="fade-up-enter" style="grid-column-start:1;grid-column-end: 2;grid-row-start: 4;grid-row-end: 5;var(--background-light);border-radius: 1rem;position: relative;overflow: hidden">
                            <img :src="require('@/assets/projects/7/band03.png')" alt="" style="width:100%;height: 100%;box-sizing: border-box;object-fit:cover;padding-top: 0">
                        </div>
                        <div id="band04" class="fade-up-enter" style="grid-column-start: 2;grid-column-end: 3;grid-row-start: 3;grid-row-end: 5;var(--background-light);border-radius: 1rem;position: relative;overflow: hidden">
                            <img :src="require('@/assets/projects/7/band04.png')" alt="" style="width:100%;height:100%;box-sizing: border-box;object-fit:contain;padding-top: 0" >
                        </div>
                        <div id="band05" class="fade-up-enter" style="grid-column-start: 1;grid-column-end: 3;grid-row-start: 5;grid-row-end: 6;var(--background-light);border-radius: 1rem;position: relative;overflow: hidden;display: flex">
                            <img :src="require('@/assets/projects/7/strap1.png')" alt="" style="flex:1;box-sizing: border-box;object-fit:contain;padding-top: 0;min-width: 0" >
                            <img :src="require('@/assets/projects/7/strap2.png')" alt="" style="flex:1;box-sizing: border-box;object-fit:contain;padding-top: 0;min-width: 0" >
                            <img :src="require('@/assets/projects/7/strap3.png')" alt="" style="flex:1;box-sizing: border-box;object-fit:contain;padding-top: 0;min-width: 0" >
                            <img :src="require('@/assets/projects/7/strap4.png')" alt="" style="flex:1;box-sizing: border-box;object-fit:contain;padding-top: 0;min-width: 0" >
                            <img :src="require('@/assets/projects/7/strap5.png')" alt="" style="flex:1;box-sizing: border-box;object-fit:contain;padding-top: 0;min-width: 0" >
                            <img :src="require('@/assets/projects/7/strap6.png')" alt="" style="flex:1;box-sizing: border-box;object-fit:contain;padding-top: 0;min-width: 0" >
                        </div>
                    </div>
                </div>
            </div>
            <div id="clip" style="width: calc(100% + 4rem);position: relative;left: -2rem;top:-14vw" class="fade-up-enter">
                <img :src="require('@/assets/projects/7/details4.png')" alt="" id="details4"  style="width: calc(100%);padding-top: 0">
                <div id="clip-content" style="background-color: #DF80FF;padding: 0 2rem;height: 0;overflow: hidden">
                    <div style="border-radius: 1rem;width: 100%;height:calc(100vw - 4rem);var(--background-light);margin-bottom: 4rem">
                        <iframe src='https://my.spline.design/clipholder-e09de686ddc984ef7145ae62213dec80/' frameborder='0' width='100%' height='100%'></iframe>
                    </div>
                </div>
            </div>
        </div>
    </PageContentContainer>
</template>

<script>
    import {gsap,Power2} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({duration:0.8, ease:Power2.easeInOut,scroller:'.detail-wrapper'});
    export default {
        name: "Project7",
        data(){
            return{
                isSuitFolded:true,
                isBandFolded:true,
                isClipFolded:true,
            }
        },
        props:[
            'category',
            'period',
            'skills',
            'tools',
            'title',
            'language'
        ],
        mounted(){
            document.querySelector('#suit').addEventListener('click',()=>{
                if(this.isSuitFolded){
                    gsap.to('#suit-content',{
                        height:'auto',
                        duration:0.8,
                        onComplete:()=>{
                            this.isSuitFolded = false;
                        }
                    })
                }else {
                    gsap.to('#suit-content',{
                        height:0,
                        duration:0.8,
                        onComplete:()=>{
                            this.isSuitFolded = true;
                        }
                    })
                }
            });
            document.querySelector('#band').addEventListener('click',()=>{
                if(this.isBandFolded){
                    gsap.to('#band-content',{
                        height:'auto',
                        duration:0.8,
                        onComplete:()=>{
                            this.isBandFolded = false;
                        }
                    })
                }else {
                    gsap.to('#band-content',{
                        height:0,
                        duration:0.8,
                        onComplete:()=>{
                            this.isBandFolded = true;
                        }
                    })
                }
            });
            document.querySelector('#clip').addEventListener('click',()=>{
                if(this.isClipFolded){
                    gsap.to('#clip-content',{
                        height:'auto',
                        duration:0.8,
                        onComplete:()=>{
                            this.isClipFolded = false;
                        }
                    })
                }else {
                    gsap.to('#clip-content',{
                        height:0,
                        duration:0.8,
                        onComplete:()=>{
                            this.isClipFolded = true;
                        }
                    })
                }
            })
        }
    }
</script>

<style scoped>
</style>