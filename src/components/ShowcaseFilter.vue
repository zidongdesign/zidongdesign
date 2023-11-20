<template>
    <div class="showcase-filter">
        <div class="wrapper">
            <div class="showcase-filter-item selected interactive-l all" @click="changeFilter">
                <span v-if="language == 'ZH'">全部</span>
                <span v-else-if="language == 'EN'">All</span>
            </div>
            <div class="showcase-filter-item interactive-l" v-for="item in this.categories" :key = "item.id" @click="changeFilter">
                <span v-if="language == 'ZH'">{{item.ZH}}</span>
                <span v-else-if="language == 'EN'">{{item.EN}}</span>
            </div>
            <div class="filter-selected-bar"></div>
        </div>
    </div>
</template>

<script>
    import {gsap} from 'gsap'
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    export default {
        name: "ShowcaseFilter",
        data(){
            return{
                categorySelectedIndex:0
            }
        },
        mounted(){
            gsap.set('.filter-selected-bar',{
                left: document.querySelector('.showcase-filter-item.selected').getBoundingClientRect().left,
                width:document.querySelector('.showcase-filter-item.selected').getBoundingClientRect().width,
            })
        },
        computed:{
            projects:function(){
                return this.ProjectData.data().projectData.reverse().filter(function (item) {
                    return item.isShowcases;
                });
            },
            categories:function () {
                return this.ProjectData.data().projectCategories;
            },
        },
        methods:{
            changeFilter(e){
                const index = Array.from(e.target.parentElement.children).indexOf(e.target);
                document.querySelector('.showcase-filter-item.selected').classList.remove('selected');
                e.target.classList.add('selected');
                gsap.to('.filter-selected-bar',{
                    left: document.querySelector('.showcase-filter-item.selected').getBoundingClientRect().left,
                    width:document.querySelector('.showcase-filter-item.selected').getBoundingClientRect().width,
                    duration:0.4,
                });
                this.categorySelectedIndex = index;
                this.$emit('changeFilter',this.categorySelectedIndex);
            },
            resetFilter(){
                document.querySelector('.showcase-filter-item.selected').classList.remove('selected');
                document.querySelector('.showcase-filter-item.all').classList.add('selected');
                gsap.to('.filter-selected-bar',{
                    left: document.querySelector('.showcase-filter-item.selected').getBoundingClientRect().left,
                    width:document.querySelector('.showcase-filter-item.selected').getBoundingClientRect().width,
                    duration:0.4,
                });
                this.categorySelectedIndex = 0;
                this.$emit('changeFilter',0);
            }
        },
        props:['language']
    }
</script>

<style scoped>
    .showcase-filter{
        position: fixed;
        width: 100%;
        height: 4rem;
        vertical-align: center;
        border-top: 1px var(--foreground-light-4) solid;
        bottom: 0;
        z-index: 97;
        background-color: var(--background-dark);
        padding: 0 2rem;
        transform: translateY(100%);
        box-sizing: border-box;
    }
    .wrapper {
        width: 100%;
        max-width: 768px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin: 0 auto;
    }
    .showcase-filter-item{
        color:var(--foreground-light-1);
        display: inline-block;
        text-align: center;
        flex: none;
        flex-grow: 0;
        height: 4rem;
        line-height: 4rem;
        opacity: 0.6;
        position: relative;
        transition: 0.4s;
    }
    .showcase-filter-item.selected{
        opacity: 1;
    }
    .filter-selected-bar{
        position: absolute;
        bottom: calc(4rem - 2px);
        height: 2px;
        background-color: var(--background-light);
    }
    .showcase-filter-item span{
        color:var(--foreground-light-1);
        display: inline-block;
        text-align: center;
        pointer-events: none;
        padding: 0 1rem;
    }
</style>