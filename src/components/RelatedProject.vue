<template>
    <div>
        <div style="position: relative; background-color: var(--background-light); gap: 2rem;display: flex;flex-direction: column;padding: 4rem 2rem;">
            <h3 class="" style="color: var(--foreground-dark-1);"> Related projects</h3>
            <div class="h-stack" style="color:var(--foreground-dark-1);flex-wrap: wrap;">
                <div v-for="item in relatedProjects" :key="item.id" style="font-size: 1rem;height: fit-content;flex:1;display: flex;flex-direction: column;min-width: 200px;max-width: 24rem;" @click="changeProject(item.id)" class="interactive-l">
                    <img :src="item.dataSrc" alt="" width="100%" style="pointer-events: none;">
                    <div v-if="language=='ZH'" style="padding: 1rem 0;color: var(--foreground-dark-1);pointer-events: none;">{{ item.title.ZH }}</div>
                    <div v-else-if="language=='EN'" style="padding: 1rem 0;color: var(--foreground-dark-1);pointer-events: none;">{{ item.title.EN }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
        }
    }
</script>

<style scoped>
</style>