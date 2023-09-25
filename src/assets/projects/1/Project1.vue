<template>
    <div class="project-content-container">
        <div class="info">
            <h1 class="category fade-up-enter">{{this.title}}</h1>
            <p class="time fade-up-enter">{{this.category}} {{this.period}}</p>
        </div>

        <p v-if="language=='ZH'" class="fade-up-enter">去年买了MacBook之后，我发现上面能玩的游戏确实不多，那么为何不自己做一个……</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">When I brought my MBP a year ago, there are't many games on MacOS, so I decided to make a game for myself...</p>
        <video controls width="100%" :poster="require('@/assets/projects/1/details1.png')" class="fade-up-enter">
            <source src="./details1.mp4"
                    type="video/mp4">
        </video>
        <p v-if="language=='ZH'" class="fade-up-enter">最后我决定自己做一个可以无限进行的游戏：敌人是随机生成的，当玩家消灭一群敌人之后，他需要前往下一个地点消灭下一波敌人。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">Finally, I decided to make a game that can be played infinitely. The enemies are randomly generated. After the player has eliminated a wave of enemies, he needs to continue to the next destination to eliminate the next wave of enemies.</p>
        <img :src="require('@/assets/projects/1/details2.gif')" alt="" class="fade-up-enter">
        <img :src="require('@/assets/projects/1/details3.png')" alt="" class="fade-up-enter">
        <img :src="require('@/assets/projects/1/details4.png')" alt="" class="fade-up-enter">
        <img :src="require('@/assets/projects/1/details5.png')" alt="" class="fade-up-enter">
    </div>
</template>

<script>
    import {gsap,Power2} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({duration:0.8, ease:Power2.easeInOut,scroller:'.detail-wrapper'});
    export default {
        name: "Project1",
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
        color: var(--white);
        width: 100%;
        max-width: 768px;
        transform: translate(-50%);
        left: 50%;
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