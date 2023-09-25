<template>
    <div class="scroll-bar-container">
        <div class="scroll-bar-track" id="track"></div>
    </div>
</template>

<script>
    import {gsap,Power2} from 'gsap';
    import {map} from '@/utils/utils'
    export default {
        name: "ScrollBar",
        mounted(){
        },
        watch:{
            scrollY:function () {
                gsap.to(document.querySelector('#track'),0.8,{
                    y:map(this.scrollY,0,1,0,64),
                    ease:Power2.easeOut
                })
            }
        },
        methods:{
            show(){
                gsap.fromTo(document.querySelector('.scroll-bar-container'),{
                    opacity:0,
                    y:32,
                },{
                    duration:0.8,
                    opacity:1,
                    y:0,
                    ease:Power2.easeInOut
                })
            },
            hide(){
                gsap.to(document.querySelector('.scroll-bar-container'),{
                    opacity:0,
                    y:-32,
                });
            }
        },
        props:['scrollY'],
    }
</script>

<style scoped>
    .scroll-bar-container{
        width: 1px;
        height: 64px;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--gray7);
        opacity: 0;
    }
    .scroll-bar-track{
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background: var(--gray7);
        position: absolute;
        top: -6px;
        left: -5px;
    }
</style>