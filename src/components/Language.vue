<template>
    <div>
        <div class="language interactive-s" @click="switchLanguage">
            <span style="margin-right: 0.5rem;opacity: 1" id="EN">EN</span>
            <span style="opacity: 0.5" id="ZH">中文</span>
        </div>
        <div class="language-cover"></div>
    </div>

</template>

<script>
    import {gsap,Power2} from 'gsap'

    export default {
        name: "Language",
        props:[
            'language'
        ],
        mounted(){
            if(this.language ==="EN"){
                document.querySelector("#EN").style.opacity = 1;
                document.querySelector("#ZH").style.opacity = 0.5;
            }
            else if(this.language ==="ZH"){
                document.querySelector("#EN").style.opacity = 0.5;
                document.querySelector("#ZH").style.opacity = 1;
            }
        },
        methods:{
            switchLanguage(){
                document.querySelector('.language-cover').style.pointerEvents = 'auto';
                gsap.fromTo('.language-cover',{
                    opacity:0,
                },{
                    duration:0.8,
                    opacity:1,
                    ease:Power2.easeInOut,
                    onComplete:()=>{
                        this.$emit('switchLanguage');
                        setInterval(function () {
                            gsap.to('.filter-changing-cover',{
                                left: document.querySelector('.showcase-filter-item.selected').getBoundingClientRect().left,
                                width:document.querySelector('.showcase-filter-item.selected').getBoundingClientRect().width,
                                duration:0.1,
                            });
                        },100);
                        gsap.to('.language-cover',{
                            delay:0.2,
                            duration:0.8,
                            opacity:0,
                            ease:Power2.easeInOut,
                            onComplete:()=>{
                                document.querySelector('.language-cover').style.pointerEvents = 'none';

                            }
                        });
                    }
                });
            }
        },
        watch:{
            language:function () {
                if(this.language === 'ZH'){
                    document.querySelector('#EN').style.opacity = 0.5;
                    document.querySelector('#ZH').style.opacity = 1;
                }
                else if(this.language === 'EN'){
                    document.querySelector('#ZH').style.opacity = 0.5;
                    document.querySelector('#EN').style.opacity = 1;
                }
            }
        }
    }
</script>

<style scoped>
    .language{
        position: fixed;
        right: 1rem;
        top: 1rem;
        color: var(--white);
        z-index: 97;
        padding: 1rem;
        font-size: 1rem;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        mix-blend-mode:difference
    }
    .language-cover{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: var(--background-color);
        top: 0;
        opacity: 0;
        z-index: 100;
        pointer-events: none;
    }
    span{
        transition: 0.4s ease-in-out;
        pointer-events: none;
    }
</style>