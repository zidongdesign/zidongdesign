<template>
    <div class="project-content-container">
        <div class="info">
            <h1 class="category fade-up-enter">{{this.title}}</h1>
            <p class="time fade-up-enter">{{this.category}} {{this.period}}</p>
        </div>
        <p v-if="language=='ZH'" class="fade-up-enter">在疫情的预防阶段，人们的危机意识弱，家庭应急物资储备不足。在预备阶段，应急物资不足的家庭更容易产生恐慌情绪导致囤积过量物资的行为，导致了市场应急物资的短缺。除此之外，社区和城市的应急准备也不够充分，进一步加剧人们的恐慌和抢购物资的心理。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">In the prevention stage of the epidemic, people's awareness of crisis is weak, and the household emergency supplies are insufficient. In the preparatory stage, families with insufficient emergency supplies are more likely to panic and hoard excess supplies, resulting in a shortage of emergency supplies in the market. In addition, the emergency preparedness of communities and cities is also insufficient, which further exacerbates people's panic and panic buying.</p>
        <img :src="require('@/assets/projects/8/details1.png')" alt="" id="details1" class="fade-up-enter" style="width: 100%;">
        <p v-if="language=='ZH'" class="fade-up-enter">通过对5个家庭的采访，我们发现，平时应急物资不足的家庭，更容易在灾难初期无法冷静应对</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">Through interviews with 5 families, we found that families with insufficient emergency supplies are more likely to be unable to cope calmly in the early stages of a disaster</p>
        <img :src="require('@/assets/projects/8/details2.png')" alt="" id="details2" class="fade-up-enter" style="width: 100%;">
        <h2 v-if="language=='ZH'" class="fade-up-enter" style="margin-top: 8rem">价值宣言</h2>
        <h2 v-else-if="language=='EN'" class="fade-up-enter" style="margin-top: 8rem">Value Proposition</h2>
        <p v-if="language=='ZH'" class="fade-up-enter">鼓励城市分散储备应急物资，通过建立家庭生活物资清单、建立快到期物资回收体系，提高城市应对危机的应变能力。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">Encourage cities to store emergency supplies in a decentralized manner, and improve the city's ability to respond to crises by establishing a list of household supplies and a recovery system for materials that are about to expire.</p>
        <img :src="require('@/assets/projects/8/details3.png')" alt="" id="details3" class="fade-up-enter" style="width: 100%;">
        <h2 v-if="language=='ZH'" class="fade-up-enter" style="margin-top: 8rem">用户画像</h2>
        <h2 else-v-if="language=='En'" class="fade-up-enter" style="margin-top: 8rem">Persona</h2>
        <img :src="require('@/assets/projects/8/details4.png')" alt="" id="details4" class="fade-up-enter" style="width: 100%;">
        <h2 v-if="language=='ZH'" class="fade-up-enter" style="margin-top: 8rem">故事板</h2>
        <h2 else-v-if="language=='En'" class="fade-up-enter" style="margin-top: 8rem">Story Board</h2>
        <img :src="require('@/assets/projects/8/details5.png')" alt="" id="details5" class="fade-up-enter" style="width: 100%;">
        <h2 v-if="language=='ZH'" class="fade-up-enter" style="margin-top: 8rem">App 界面</h2>
        <h2 else-v-if="language=='En'" class="fade-up-enter" style="margin-top: 8rem">App UI</h2>
        <img :src="require('@/assets/projects/8/app1.png')" alt="" id="app1" class="fade-up-enter" style="width: 60%;float: left">
        <img :src="require('@/assets/projects/8/app2.png')" alt="" id="app2" class="fade-up-enter" style="width: 60%;float: right">
        <img :src="require('@/assets/projects/8/app3.png')" alt="" id="app3" class="fade-up-enter" style="width: 60%;float: left">
        <img :src="require('@/assets/projects/8/app4.png')" alt="" id="app4" class="fade-up-enter" style="width: 35%;float: right">
        <img :src="require('@/assets/projects/8/app5.png')" alt="" id="app5" class="fade-up-enter" style="width: 100%;">
    </div>
</template>

<script>
    import {gsap,Power2} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({duration:0.8, ease:Power2.easeInOut,scroller:'.detail-wrapper'});
    export default {
        name: "Project8",
        data(){
            return{
            }
        },
        props:[
            'category',
            'period',
            'title',
            'language'
        ],
        mounted() {
            gsap.utils.toArray('.fade-up-enter').forEach((e) => {
                gsap.from(e, {
                    y: 8 + 'rem',
                    opacity: 0,
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
        max-width: 1024px;
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