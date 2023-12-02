<template>
    <div class="project-content-container">
        
        <slot></slot>
    </div>
</template>

<script>
    import {gsap,Power2} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({duration:0.8, ease:Power2.easeInOut,scroller:'.detail-wrapper'});
    export default {
        name: "PageContentContainer",
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
            gsap.utils.toArray( '.border-top' ).forEach((e)=>{
                gsap.from(e,{
                    width: 0,
                    duration:0.8,
                    scrollTrigger: {
                        trigger: e,
                        toggleActions: 'restart none none none',
                    }
                });
            });

        },
        methods:{
        }
    }
</script>

<style scoped>
    .project-content-container{
        padding: 0 2rem 4rem 2rem;
        margin: 0 auto;
        color: var(--foreground-light-1);
        width: 100%;
        max-width: 768px;
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8rem;
    }
</style>