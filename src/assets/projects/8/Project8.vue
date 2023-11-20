<template>
    <PageContentContainer>
        <PageInfo v-if="language=='ZH'" :title="'帮助居民积极准备应急物资，增强社区的风险应对能力'" :category="this.category" :period="this.period" :skills="this.skills" :tools="this.tools"></PageInfo>
        <PageInfo v-else-if="language=='EN'" :title="'Help residents gear up with emergency supplies to boost community resilience'" :category="this.category" :period="this.period" :skills="this.skills" :tools="this.tools"></PageInfo>
        <PageSection>
            <p v-if="language=='ZH'" class="fade-up-enter">在疫情的预防阶段，人们的危机意识弱，家庭应急物资储备不足。在预备阶段，应急物资不足的家庭更容易产生恐慌情绪导致囤积过量物资的行为，导致了市场应急物资的短缺。除此之外，社区和城市的应急准备也不够充分，进一步加剧人们的恐慌和抢购物资的心理。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">In the prevention stage of the epidemic, people's awareness of crisis is weak, and the household emergency supplies are insufficient. In the preparatory stage, families with insufficient emergency supplies are more likely to panic and hoard excess supplies, resulting in a shortage of emergency supplies in the market. In addition, the emergency preparedness of communities and cities is also insufficient, which further exacerbates people's panic and panic buying.</p>
            <img :src="require('@/assets/projects/8/details1.png')" alt="" id="details1" class="fade-up-enter" style="width: 100%;">
            <p v-if="language=='ZH'" class="fade-up-enter">通过对5个家庭的采访，我们发现，平时应急物资不足的家庭，更容易在灾难初期无法冷静应对</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Through interviews with 5 families, we found that families with insufficient emergency supplies are more likely to be unable to cope calmly in the early stages of a disaster</p>
            <img :src="require('@/assets/projects/8/details2.png')" alt="" id="details2" class="fade-up-enter" style="width: 100%;">
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter" >价值宣言</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter" >Value Proposition</h2>
            <p v-if="language=='ZH'" class="fade-up-enter">鼓励城市分散储备应急物资，通过建立家庭生活物资清单、建立快到期物资回收体系，提高城市应对危机的应变能力。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Encourage cities to store emergency supplies in a decentralized manner, and improve the city's ability to respond to crises by establishing a list of household supplies and a recovery system for materials that are about to expire.</p>
            <img :src="require('@/assets/projects/8/details3.png')" alt="" id="details3" class="fade-up-enter" style="width: 100%;">
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter" >用户画像</h2>
            <h2 else-v-if="language=='En'" class="fade-up-enter" >Persona</h2>
            <img :src="require('@/assets/projects/8/details4.png')" alt="" id="details4" class="fade-up-enter" style="width: 100%;">
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter" >故事板</h2>
            <h2 else-v-if="language=='En'" class="fade-up-enter" >Story Board</h2>
            <img :src="require('@/assets/projects/8/details5.png')" alt="" id="details5" class="fade-up-enter" style="width: 100%;">
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter" >App 界面</h2>
            <h2 else-v-if="language=='En'" class="fade-up-enter" >App UI</h2>
            <div class="h-stack" style="flex-wrap: wrap;">
                <img :src="require('@/assets/projects/8/app1.png')" alt="" id="app1" class="fade-up-enter" style="width: calc(50% - 0.5rem)">
                <img :src="require('@/assets/projects/8/app2.png')" alt="" id="app2" class="fade-up-enter" style="width: calc(50% - 0.5rem)">
                <img :src="require('@/assets/projects/8/app3.png')" alt="" id="app3" class="fade-up-enter" style="width: calc(50% - 0.5rem)">
                <img :src="require('@/assets/projects/8/app4.png')" alt="" id="app4" class="fade-up-enter" style="width: calc(50% - 0.5rem)">
                <img :src="require('@/assets/projects/8/app5.png')" alt="" id="app5" class="fade-up-enter" style="width: 100%;">
            </div>
        </PageSection>
    </PageContentContainer>
</template>

<script>
    export default {
        name: "Project8",
        data(){
            return{
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
        mounted() {
        },
    }
</script>

<style scoped>
</style>