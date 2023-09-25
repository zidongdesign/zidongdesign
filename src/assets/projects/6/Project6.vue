<template>
    <div class="project-content-container">
        <div class="info">
            <h1 class="category fade-up-enter">{{this.title}}</h1>
            <p class="time fade-up-enter">{{this.category}} {{this.period}}</p>
        </div>
        <p v-if="language=='ZH'" class="fade-up-enter">RaceFit International, 是一家专注于动作捕捉技术的硬件公司，他们希望能够借助他们的产品RaceFit CORE，为用户提供一种全新的智能健身体验。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">RaceFit International, a hardware company specializing in motion capture technology, hopes to provide users with a new smart fitness experience with their product RaceFit CORE.</p>
        <img :src="require('@/assets/projects/6/details17.png')" alt="" class="fade-up-enter" id="details17" style="pointer-events: none;padding-top: 0;">
        <p v-if="language=='ZH'" class="fade-up-enter">通过用户研究，我们洞察了四个训练者类型，并绘制了他们的用户旅程图，分析了用户在使用传统健身App过程中的主要问题。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">Through user research, we gained insights into four trainer types and mapped their user journeys, analyzing the main problems users have with traditional fitness apps.</p>
        <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details1.svg')" alt="" class="fade-up-enter" style="">
        <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details1-EN.svg')" alt="" class="fade-up-enter" style="">
        <div v-if="language=='ZH'" id="group3" style="position: relative;padding-top: 2rem">
            <img :src="require('@/assets/projects/6/details10.svg')" alt="" id="details10" style="pointer-events: none;padding-top: 0;">
            <img :src="require('@/assets/projects/6/details11.svg')" alt="" id="details11" style="opacity: 0;pointer-events: none;padding-top: 0;">
            <img :src="require('@/assets/projects/6/details12.svg')" alt="" id="details12" style="opacity: 0;margin-bottom: 200px;pointer-events: none;padding-top: 0;">
        </div>
        <div v-else-if="language=='EN'" id="group3" style="position: relative;padding-top: 2rem">
            <img :src="require('@/assets/projects/6/details10-EN.svg')" alt="" id="details10" style="pointer-events: none;padding-top: 0;">
            <img :src="require('@/assets/projects/6/details11-EN.svg')" alt="" id="details11" style="opacity: 0;pointer-events: none;padding-top: 0;">
            <img :src="require('@/assets/projects/6/details12-EN.svg')" alt="" id="details12" style="opacity: 0;margin-bottom: 200px;pointer-events: none;padding-top: 0;">
        </div>
        <img :src="require('@/assets/projects/6/details13.svg')" alt="" class="fade-up-enter" id="details13" style="">
        <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details14.svg')" alt="" class="fade-up-enter" id="details14">
        <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details14-EN.svg')" alt="" class="fade-up-enter" id="details14">
        <img :src="require('@/assets/projects/6/details15.svg')" alt="" class="fade-up-enter" id="details15">
        <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details2.svg')" alt="" class="fade-up-enter" id="details2">
        <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details2-EN.svg')" alt="" class="fade-up-enter" id="details2">
        <p v-if="language=='ZH'" class="fade-up-enter">通过整合RaceFit 的核心产品和技术，我们打造了个结合了软件、硬件和人工智能的完整解决方案。“软硬智”三位一体，各司其职，为用户提供了全新的专业的、智能的、有趣的健身体验。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">By integrating RaceFit's core products and technologies, we have created a complete solution that combines software, hardware and artificial intelligence. The trinity of "soft, hard and intelligent", each performing its own duties, provides users with a brand-new professional, intelligent and interesting fitness experience.</p>
        <p v-if="language=='ZH'" class="fade-up-enter">硬件佩戴在用户的手腕和脚踝处，收集用户的训练数据，包括加速度、角速度和方向。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">The hardware is worn on the user's wrist and ankle and collects the user's training data, including acceleration, angular velocity, and orientation.</p>
        <img :src="require('@/assets/projects/6/details16.png')" alt="" class="fade-up-enter" id="details16" style="width: calc(100%);left: 0;">
        <p v-if="language=='ZH'" class="fade-up-enter">根据系统方案所确定的功能列表，我们经过讨论确定了各项功能的结构、信息的层级、以及用户使用各个功能的流程。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">According to the list of functions determined by the system solution, we have determined the structure of each function, the level of information, and the process for users to use each function through discussion.</p>
        <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details3.svg')" alt="" id="details3" class="fade-up-enter" style="width: calc(100%);left: 0;">
        <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details3-EN.svg')" alt="" id="details3" class="fade-up-enter" style="width: calc(100%);left: 0;">
        <p v-if="language=='ZH'" class="fade-up-enter">我作为用户体验设计师，在项目中构建起算法、软件和用户之间的桥梁，思考用户数据如何生成不同类型的用户的个性化训练方案，并制定了框架。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">As a user experience designer, I build a bridge between algorithms, software and users in the project, think about how user data can generate personalized training programs for different types of users, and formulate a framework</p>
        <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details18.svg')" alt="" id="details18" class="fade-up-enter" style="width: calc(100%);left: 0;">
        <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details18-EN.svg')" alt="" id="details18" class="fade-up-enter" style="width: calc(100%);left: 0;">
        <p v-if="language=='ZH'" class="fade-up-enter">人工智能需要大量的用户数据进行计算，我们巧妙地在用户的使用流程中穿插了必要的数据收集节点，以此作为人工智能学习的资料。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">Artificial intelligence requires a large amount of user data for calculation, and we cleverly interspersed the necessary data collection nodes in the user's use process as the material for artificial intelligence to learn.</p>
        <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details19.svg')" alt="" id="details19" class="fade-up-enter" style="width: calc(100%);left: 0;">
        <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details19-EN.svg')" alt="" id="details19" class="fade-up-enter" style="width: calc(100%);left: 0;">
        <p v-if="language=='ZH'" class="fade-up-enter">我们对用户图形界面进行了设计，以深色风格为主的界面能够体现专业感和智能感，而多彩的插图则能够丰富页面的感觉，提供趣味性。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">We have designed the user graphical interface. The dark style of the interface can reflect a sense of professionalism and intelligence, while the colorful illustrations can enrich the feeling of the page and provide fun.</p>
        <div id="group1" style="margin: 8rem 0;">
            <img :src="require('@/assets/projects/6/details4.png')" alt="" id="details4" style="height: 10rem;width: auto;float: right;pointer-events: none">
            <img :src="require('@/assets/projects/6/details5.png')" alt="" id="details5" style="height: 10rem;width: auto;padding-top: 1rem;float: left;pointer-events: none">
            <img :src="require('@/assets/projects/6/details6.png')" alt="" id="details6" style="height: 10rem;width: auto;padding-top: 1rem;float: right;pointer-events: none">
            <div style="clear:both;"></div>
        </div>
        <div id="app-screen-1" style="position: relative;margin-top: 4rem;display: flex;align-items: flex-end">
            <div style="flex:1;position: relative">
                <img :src="require('@/assets/projects/6/app01.png')" alt="" class="fade-up-enter" id="app01" >
                <img :src="require('@/assets/projects/6/app02.png')" alt="" id="app02" style="position:absolute;left: 2rem;top: 2rem;">
            </div>
            <div style="flex:1;">
                <p v-if="language=='ZH'" class="fade-up-enter">针对专业型用户，我们设计了详细的训练报告，提供训练评估</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">For Professional Users, we have designed a detailed training report to provide training evaluation</p>
            </div>
        </div>
        <div id="app-screen-2" style="position: relative;margin-top: 4rem;display: flex;align-items: flex-end">
            <div style="flex:1;">
                <p v-if="language=='ZH'" class="fade-up-enter">针对挑战型用户，通过体能测试评估运动能力，与其他用户进行比对</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">For Challenging Users, the exercise ability is evaluated through physical fitness test and compared with other users</p>
            </div>
            <div style="flex:1;position: relative;z-index: -1">
                <img :src="require('@/assets/projects/6/app03.png')" alt="" class="fade-up-enter" id="app03" style="width: calc(100% + 4rem);position: relative;left: -4rem">
            </div>
        </div>
        <div id="app-screen-3" style="position: relative;margin-top: 4rem;display: flex;align-items: flex-end">
            <div style="flex:1;position: relative;z-index: -1">
                <img :src="require('@/assets/projects/6/app04.png')" alt="" class="fade-up-enter" id="app04" style="width: calc(100% + 4rem);position: relative;">
            </div>
            <div style="flex:1;">
                <p v-if="language=='ZH'" class="fade-up-enter">针对玩家型的用户，我们设计了富有乐趣的游戏化训练内容</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">For Player Users, we have designed fun game training content</p>
            </div>
        </div>
        <div id="app-screen-4" style="position: relative;margin-top: 4rem;display: flex;align-items: flex-end;">
            <div style="z-index: 3;display: inline-block;flex: 1">
                <p v-if="language=='ZH'" class="fade-up-enter">针对愚公型的用户，我们设计了全面的训练内容调整工具，替换无法进行的运动，系统也会学习这种修改并更好地制定训练计划</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">For Work-hard users, we have designed a comprehensive training content adjustment tool to replace the sports that cannot be carried out. The system will also learn this modification and better formulate the training plan</p>
            </div>
            <div style="position: relative;z-index: 1;display: inline-block;margin-top: 2rem;flex: 1;">
                <img :src="require('@/assets/projects/6/app05.png')" alt="" id="app05" style="width: calc(100% + 4rem);position: relative;left: -4rem;top: -2rem;z-index: 2">
                <div style="width: calc(100% + 4rem);position: absolute;left: -4rem;top:0;overflow: hidden;z-index: 1" id="app06">
                    <img :src="require('@/assets/projects/6/app06.png')" alt="" id="app06-1" style="width: 100%;padding-top: 0;position: relative;top: 0;">
                    <img :src="require('@/assets/projects/6/app07.png')" alt="" id="app06-2" style="width: 100%;position: absolute;top: 0;left: 0;z-index: -1;padding-top: 0">
                </div>
            </div>
        </div>
        <p v-if="language=='ZH'" class="fade-up-enter">我们为该项目制作了近百个动作演示动画，该动画通过Blender进行模型制作，动画K帧和渲染。</p>
        <p v-else-if="language=='EN'" class="fade-up-enter">We made nearly a hundred motion demo animations for the project, which were modeled, animated K-frames, and rendered through Blender.</p>
        <div id="group2" style="position: relative;margin:2rem auto;width: calc(100% - 10rem);padding-top: calc(100% - 10rem);box-sizing: border-box;">
            <div  alt="" id="details7"></div>
            <div  alt="" id="details8" class=""></div>
            <div id="group2-line"></div>
        </div>
        <p v-if="language=='ZH'" class="fade-up-enter" style="margin-bottom: 200px">我还参与了该企业的硬件设计项目，详情请浏览——RaceFit CORE</p>
        <p v-else-if="language=='EN'" class="fade-up-enter" style="margin-bottom: 200px">I also participated in the company's hardware design project. For details, please visit - RaceFit CORE</p>
<!--        <img :src="require('@/assets/projects/6/details20.png')" alt="" id="details20" class="fade-up-enter" style="width: calc(100%);left: 0;">-->
    </div>
</template>

<script>
    import {gsap,Power2} from "gsap";
    import {ScrollTrigger} from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({duration:0.8, ease:Power2.easeInOut,scroller:'.detail-wrapper'});
    export default {
        name: "Project6",
        props:[
            'category',
            'period',
            'title',
            'language'
        ],
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
            gsap.fromTo(('#details4'),{
                x: 0,
            },{
                x: (document.querySelector('#details4').clientWidth - document.querySelector('.project-content-container').clientWidth),
                duration:0.8,
                scrollTrigger:{
                    trigger:'#group1',
                    scrub: 2,
                    // start:"center center",
                    end:'+=1000',
                }
            });
            gsap.fromTo(('#details5'),{
                x: 0,
            },{
                x: -(document.querySelector('#details5').clientWidth - document.querySelector('.project-content-container').clientWidth),
                duration:0.8,
                scrollTrigger:{
                    trigger:'#group1',
                    scrub: 2,
                    // start:"center center",
                    end:'+=1000',
                }
            });
            gsap.fromTo(('#details6'),{
                x: 0,
            },{
                x: (document.querySelector('#details6').clientWidth - document.querySelector('.project-content-container').clientWidth),
                duration:0.8,
                scrollTrigger:{
                    trigger:'#group1',
                    scrub: 2,
                    // start:"center center",
                    end:'+=1000',
                }
            });
            gsap.fromTo(('#group1'),{
                x:0,
                scale:1,
                rotate:0,
            },{
                x:0,
                scale:2,
                rotate:15,
                scrollTrigger:{
                    trigger:'#group1',
                    scrub: true,
                    // start:'center center',
                    end:'+=1000',
                }
            });
            gsap.fromTo(('#details8'),{
                height:0,
            },{
                height:100+'%',
                duration:0.8,
                scrollTrigger:{
                    trigger:'#group2',
                    toggleActions:'restart none none none',
                    scrub: 2,
                    start:'bottom bottom',
                    end:'+=300'
                }
            });
            gsap.fromTo(('#details7'),{
                height:100+'%',
            },{
                height:0,
                duration:0.8,
                scrollTrigger:{
                    trigger:'#group2',
                    toggleActions:'restart none none none',
                    scrub: 2,
                    start:'bottom bottom',
                    end:'+=300'
                }
            });
            gsap.fromTo(('#group2-line'),{
                y:0,
            },{
                y:- document.querySelector('#group2').clientHeight,
                duration:0.8,
                scrollTrigger:{
                    trigger:'#group2',
                    toggleActions:'restart none none none',
                    scrub: 2,
                    start:'bottom bottom',
                    end:'+=300'
                }
            });

            const tl1 = gsap.timeline();
            tl1.fromTo('#group2-line',{opacity:0},{opacity:1})
            .fromTo('#group2-line',{opacity:1},{opacity:0});

            ScrollTrigger.create({
                animation:tl1,
                trigger:'#group2',
                toggleActions:'restart none none none',
                scrub: 2,
                start:'bottom bottom',
                end:'+=300'
            });

            gsap.to('#details8',{
                scrollTrigger:{
                    trigger:'#group2',
                    toggleActions:'none none none none',
                    start:'bottom bottom-=300',
                    onEnter:()=>{
                        document.querySelector("#details8").classList.add('play');
                    },
                    onLeaveBack:()=>{
                        document.querySelector("#details8").classList.remove('play');
                    }
                },
            });

            gsap.fromTo('#details10',{
                opacity:0,
            },{
                opacity:1,
                scrollTrigger:{
                    trigger:'#details10',
                    start:'center center',
                    end:'+=600',
                    toggleActions:'play reset play reset',
                    pin:true,
                    pinSpacing:false,
                    pinType:"fixed"
                }
            });

            gsap.fromTo('#details11',{
                opacity:0,
            },{
                opacity:1,
                scrollTrigger:{
                    trigger:'#details11',
                    start:'center center',
                    end:'+=400',
                    toggleActions:'play reset play reset',
                    pin:true,
                    pinSpacing:false,
                    pinType:"fixed"
                }
            });

            gsap.fromTo('#details12',{
                opacity:0,
            },{
                opacity:1,
                scrollTrigger:{
                    trigger:'#details12',
                    start:'center center',
                    end:'+=200',
                    toggleActions:'play pause play reset',
                    pin:true,
                    pinType:"fixed",
                    pinSpacing:false,
                }
            });

            gsap.fromTo('#app02',{
                opacity:0,
                x:-20
            },{
                opacity:1,
                x:0,
                scrollTrigger:{
                    trigger:'#app02',
                    start:'top 50%',
                    toggleActions:'restart none none reverse',
                }
            });

            const tl2 =  gsap.timeline();
            tl2.fromTo('#app06-2',{
                yPercent:0,
            },{
                yPercent:-44.327,
            }).fromTo('#app05',{
                opacity:0,
            },{
                opacity:1,
                duration:0.2,
            });
            ScrollTrigger.create({
                animation:tl2,
                trigger:'#app-screen-4',
                start:'top 50%',
                end:'+=200',
                scrub:true,
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
        max-width: 768px;
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
    #details7{
        background-image: url("details7.png");
        background-size: 100%;
        background-position-y: top;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    #details8{
        background-image: url("details9.png");
        background-size: 3000%;
        background-position-y: bottom;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        /*animation: jumping-jacks steps(29) 1s both;*/
        /*animation-iteration-count: 0;*/
    }

    #details8.play{
        animation: jumping-jacks steps(29) 1s both;
        animation-iteration-count: infinite;
    }
    @keyframes jumping-jacks {
        0% {
            background-position-x: 0%;
        }
        100% {
            background-position-x: 100%;
        }
    }
    #group2-line{
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
        height: 1px;
        width: 50%;
        margin: 0 auto;
        position: relative;
    }
</style>