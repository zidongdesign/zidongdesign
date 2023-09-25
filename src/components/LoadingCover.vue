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
        <div class="tips">
            <p>如加载缓慢, 请尝试切换 Wi-Fi 和移动数据</p>
            <p>Try switching Wi-Fi and mobile data if loading is too slow</p>
        </div>

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
                gsap.to('.tips',{
                    opacity:0,
                    duration:0.4,
                })
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
        background: var(--background-color);
        z-index: 99;
        overflow: hidden;
    }
    h1{
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%,-50%);
        font-size: 16rem;
        color: var(--white);
        /*-webkit-text-stroke:4px var(--white);*/
        /*-webkit-text-fill-color:transparent;*/
        /*filter: url('#goo-1');*/
        /*-webkit-filter: url('#goo-1');*/
        /*font-family: Oswald;*/
    }
    .tips{
        position: absolute;
        bottom: 4rem;
        text-align: center;
        color: var(--white);
        font-size: 0.75rem;
        padding: 0 4rem;
    }
    .tips p{
        margin-bottom: 1rem;
    }
</style>