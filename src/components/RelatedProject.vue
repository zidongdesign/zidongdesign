<template>
    <div>
        <div style="position: relative; background-color: var(--background-light); gap: 2rem;display: flex;flex-direction: column;padding: 4rem 2rem;">
            <h2 v-if="language=='ZH'" class="" style="color: var(--foreground-dark-1);text-align: center;">相关项目</h2>
            <h2 v-else-if="language=='EN'" class="" style="color: var(--foreground-dark-1);text-align: center;">Related projects</h2>
            <div class="h-stack" style="color:var(--foreground-dark-1);flex-wrap: wrap;justify-content: center;align-items: center;">
                <div v-for="item in relatedProjects" :key="item.id" style="font-size: 1rem;height: fit-content;flex:1;display: flex;flex-direction: column;min-width: 200px;max-width: 24rem;" @click="changeProject(item.id)" class="interactive-l project">
                    <img :src="item.dataSrc" alt="" width="100%" style="pointer-events: none;">
                    <div v-if="language=='ZH'" style="padding: 1rem 0;color: var(--foreground-dark-1);pointer-events: none;">{{ item.title.ZH }}</div>
                    <div v-else-if="language=='EN'" style="padding: 1rem 0;color: var(--foreground-dark-1);pointer-events: none;">{{ item.title.EN }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {gsap,Power2} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({duration:0.8, ease:Power2.easeInOut,scroller:'.detail-wrapper'});
    export default {
        name: "RelatedProject",
        props:[
            'relatedProjectsID',
            'language',
        ],
        data(){
            return{
            }
        },
        computed:{
            relatedProjects: function(){
                return this.ProjectData.data().projectData.filter(obj => this.relatedProjectsID.includes(obj.id));
            },
            
        },
        methods:{
            changeProject(e){
                this.$emit('changeProject',e);
            }
        },
        mounted(){
            gsap.utils.toArray( '.project' ).forEach((e)=>{
                gsap.from(e,{
                    y: 8 + 'rem',
                    opacity:0,
                    // delay: i * 100,
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
</style>