<template>
    <div class="loading-cover">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
            <defs>
                <filter id="goo-1">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="	1 0 0 0 0
																			0 1 0 0 0
																			1 0 1 0 0
																			0 0 0 15 -8" result="goo"></feColorMatrix>
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                </filter>
            </defs>
        </svg>
        <h1>
            {{fixedPercent}}
        </h1>

    </div>
</template>

<script>
    import {gsap,Power2} from 'gsap'
    export default {
        name: "LoadingCover",
        props:['percent'],
        data(){
            return{
                tweenPercent:0,
                tl:null,
                primitiveValues:{stdDeviation:0},
            }
        },
        mounted(){
            this.tl = gsap.timeline({
                paused: true,
                onComplete: () => {
                    document.querySelector('h1').style.filter = 'none';
                },
                onReverseComplete: () => {
                    document.querySelector('h1').style.filter = 'none';
                },
                onUpdate: () => {
                    document.querySelector('#goo-1 > feGaussianBlur').setAttribute('stdDeviation', this.primitiveValues.stdDeviation)
                }
            })
                .to(this.primitiveValues, {
                    duration: 0.8,
                    ease: "none",
                    stdDeviation: 50
                })
                .to(document.querySelector('h1'), {
                    duration: 0.8,
                    ease: "none", // Power1.easeInOut
                    opacity: 0
                }, "-=0.8")
                .to('.loading-cover',{
                    duration:0.8,
                    opacity:0,
                    ease:Power2.easeInOut,
                    onComplete:()=>{
                        this.$emit('loadingCoverHided');
                        document.querySelector('.loading-cover').style.display = 'none';
                    }
                },);
        },
        computed:{
            fixedPercent:function () {
                return this.tweenPercent.toFixed(0);
            }
        },
        watch:{
            percent:function(newValue) {
                gsap.to(this.$data, {
                    duration: 0.8,
                    tweenPercent: newValue,
                    ease:Power2.easeInOut,
                });
            }
        },
        methods:{
            hide(){
                document.querySelector('h1').style.filter = "url('#goo-1')";
                this.tl.play();
            }
        }
    }
</script>

<style scoped>
    .loading-cover{
        width: 100vw;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        font-size: 4rem;
        color: var(--gray3);
        background: var(--background-dark);
        z-index: 99;
        overflow: hidden;
    }
    h1{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 16rem;
        color: var(--foreground-light-1);
    }
    .tips{
        position: absolute;
        bottom: 4rem;
        left: 50vw;
        transform: translate(-50%,0);
        text-align: center;
        color: var(--foreground-light-1);
        font-size: 0.5rem;
        padding: 0 1rem;
    }
    .tips p{
        margin-bottom: 1rem;
    }
</style>