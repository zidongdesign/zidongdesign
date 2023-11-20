<template>
    <PageContentContainer>
        <PageInfo :title="this.title" :category="this.category" :period="this.period" :skills="this.skills" :tools="this.tools"></PageInfo>
        <PageSection>
            <h2 class="fade-up-enter">Background</h2>
            <p v-if="language=='ZH'" class="fade-up-enter">RaceFit International, 是一家专注于动作捕捉技术的硬件公司，他们希望能够借助他们的产品RaceFit CORE，为用户提供一种全新的智能健身体验。这是一款佩戴在用户的手腕和脚踝处的硬件，收集用户的训练数据，包括加速度、角速度和方向</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">RaceFit International, a hardware company specializing in motion capture technology, hopes to provide users with a new smart fitness experience with their product RaceFit CORE. CORE is a hardware worn on the user's wrist and ankle and collects the user's training data, including acceleration, angular velocity, and orientation</p>
            <img :src="require('@/assets/projects/6/background.png')" alt="" class="fade-up-enter" id="details16" style="">
        </PageSection>
        <PageSection>
            <h2  v-if="language=='ZH'" class="fade-up-enter">创新的起点是了解用户</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">The starting point for innovation is to understand the user</h2>
            <p v-if="language=='ZH'" class="fade-up-enter">通过用户研究，我们洞察了四个训练者类型，并绘制了他们的用户旅程图，分析了用户在使用传统健身App过程中的主要问题</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Through user research, we gained insights into four trainer types and mapped their user journeys, analyzing the main problems users have with traditional fitness apps</p>
            <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details1.svg')" alt="" class="fade-up-enter" style="">
            <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details1-EN.svg')" alt="" class="fade-up-enter" style="">
            <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details10-EN.svg')" alt="" class="fade-up-enter" id="details10" style="pointer-events: none;">
            <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details10-EN.svg')" alt="" class="fade-up-enter" id="details10" style="pointer-events: none;">
            <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details11-EN.svg')" alt="" class="fade-up-enter" id="details11" style="pointer-events: none;">
            <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details11-EN.svg')" alt="" class="fade-up-enter" id="details11" style="pointer-events: none;">
            <p v-if="language=='ZH'" class="fade-up-enter">通过整合RaceFit 的核心产品和技术，我们打造了个结合了软件、硬件和人工智能的完整解决方案。“软硬智”三位一体，各司其职，为用户提供了全新的专业的、智能的、有趣的健身体验</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">By integrating RaceFit's core products and technologies, we have created a complete solution that combines software, hardware and artificial intelligence. The trinity of "soft, hard and intelligent", each performing its own duties, provides users with a brand-new professional, intelligent and interesting fitness experience</p>
            <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details2.svg')" alt="" class="fade-up-enter" id="details2">
            <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details2-EN.svg')" alt="" class="fade-up-enter" id="details2">
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">设计师不仅仅是画图的</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Designers don't just draw pictures</h2>
            <div style="display: flex;flex-direction: row;gap: 2rem;border: 1px solid #666;padding: 1rem;flex-wrap: wrap;" class="fade-up-enter">
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details12.svg')" alt="" id="details12" style="pointer-events: none;flex: 1;">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details12.svg')" alt="" id="details12" style="pointer-events: none;flex: 1;">
                <div style="display: flex; flex-direction:column;justify-content: space-between;flex: 1;align-self:stretch;padding-top: 5rem;padding-bottom: 5rem;min-width: 240px;gap: 1rem;">
                    <p v-if="language=='ZH'" style="">我作为用户体验设计师，在项目中充当起算法、软件和用户之间的桥梁，思考用户数据如何生成不同类型的用户的个性化训练方案，并制定了框架</p>
                    <p v-else-if="language=='EN'" style="">As a user experience designer, I play the role of a bridge between algorithms, software and users in the project, think about how user data can generate personalized training programs for different types of users, and formulate a framework</p>
                    <p v-if="language=='ZH'" style="">通过4个例子，看看我是怎么与算法合作构建AI应用：</p>
                    <p v-else-if="language=='EN'" style="">See how I work with algorithms to build AI applications through 4 examples:</p>
                </div>
            </div>
            <h3 class="fade-up-enter">1. Calibration and Fitness test</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">硬件在使用前需要进行校准，这对用户来说可不是什么好消息，经过和算法工程师的不断地讨论，我们为用户设计了简单的甩手摆腿的动作来进行校准，更加易学，易操作。我们还设计了一系列体能测试动作，帮助算法收集用户的运动数据，评估用户的运动能力</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">The hardware needs to be calibrated before use, which is not good news for users. After continuous discussion with algorithm engineers, we have designed a simple hand-waving movement for users to calibrate, which is easier to learn and operate.We also designed a series of fitness test maneuvers to help the algorithm collect data on the user's movement and assess the user's athletic ability</p>
            <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details14.svg')" alt="" id="details14" class="fade-up-enter" style="">
            <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details14-EN.svg')" alt="" id="details14" class="fade-up-enter" style="">
            <h3 class="fade-up-enter">2. Translate the language of the algorithm for the user</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">对于用户来说，他并不需要了解算法在背后是如何工作的，他们只关心自己的训练计划是什么。因此我们需要将算法的变量翻译成用户能够理解的参数，并建立变量和用户输入参数之间的关系</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">For the user, he doesn't need to know how the algorithm works behind the scenes, they only care about what their training program is. Therefore we need to translate the variables of the algorithm into parameters that the user can understand and establish the relationship between the variables and the user input parameters</p>
            <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details15.svg')" alt="" id="details14" class="fade-up-enter" style="">
            <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details15-EN.svg')" alt="" id="details14" class="fade-up-enter" style="">
            <h3 class="fade-up-enter">3. Deft handling of algorithmic delays</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">算法和普通程序的一个较大区别是，算法需要时间计算，因此用户可能并不能立即得到计算的结果。为此我们设计了一种半实时的机制，在用户下轮动作时反馈上一轮动作的表现</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">One of the big differences between algorithms and ordinary programs is that algorithms take time to compute, so the user may not get the result of the computation immediately. For this reason we have designed a semi-real-time mechanism that feeds back the performance of the previous round of actions to the user during the next round of actions</p>
            <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details16.svg')" alt="" id="details14" class="fade-up-enter" style="">
            <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details16-EN.svg')" alt="" id="details14" class="fade-up-enter" style="">
            <h3 class="fade-up-enter">4. Unconscious collection of user feedback</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">人工智能需要大量的用户数据进行计算，我们巧妙地在用户的使用流程中穿插了必要的数据收集节点，以此作为人工智能学习的资料</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Artificial intelligence requires a large amount of user data for calculation, and we cleverly interspersed the necessary data collection nodes in the user's use process as the material for artificial intelligence to learn</p>
            <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details17.svg')" alt="" id="details19" class="fade-up-enter" style="width:">
            <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details17-EN.svg')" alt="" id="details19" class="fade-up-enter" style="">
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">但我擅长的也没有丢</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">But I haven't lost what I'm good at</h2>
            <p v-if="language=='ZH'" class="fade-up-enter">根据系统方案所确定的功能列表，我们经过讨论确定了各项功能的结构、信息的层级、以及用户使用各个功能的流程</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">According to the list of functions determined by the system solution, we have determined the structure of each function, the level of information, and the process for users to use each function through discussion</p>
            <div style="position: relative;margin-bottom: 4rem;">
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/flow.svg')" alt="" id="flow" style="width: 90%;position: relative; top: 1rem;left: 1rem;">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/flow-EN.svg')" alt="" id="flow" style="width: 90%;position: relative; top: 1rem;left: 1rem;">
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/ia.svg')" alt="" id="ia" style="width: 90%;position: absolute;left: 2rem; top:50%; box-shadow: rgba(0,0,0,0.5) 0 8px 16px;">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/ia-EN.svg')" id="ia" alt="" style="width: 90%;position: absolute;left: 2rem; top:50%; box-shadow: rgba(0,0,0,0.5) 0 8px 16px;">
                <!-- <img :src="require('@/assets/projects/6/illustrations.svg')" alt="" id="illustrations" style="width: 90%;position: absolute;top: 20rem;left: -2rem;"> -->
            </div>
            
            <h3 v-if="language=='ZH'" class="fade-up-enter">整个App主要由4个模块组成：</h3>
            <h3 v-else-if="language=='EN'" class="fade-up-enter">The whole App consists of 4 main modules:</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">1. 导航和首次使用</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">1. Navigation and first-time use</p>
            <img :src="require('@/assets/projects/6/module1.svg')" alt="" class="fade-up-enter" style="">
            <p v-if="language=='ZH'" class="fade-up-enter">2. 硬件配对和校准</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">2. Hardware Pairing and Calibration</p>
            <img  :src="require('@/assets/projects/6/module2.svg')" alt="" class="fade-up-enter" style="">
            <p v-if="language=='ZH'" class="fade-up-enter">3. 体能测验和记录</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">3. Physical fitness tests and records</p>
            <img :src="require('@/assets/projects/6/module3.svg')" alt="" class="fade-up-enter" style="">
            <p v-if="language=='ZH'" class="fade-up-enter">4. 训练和分析</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">4. Training and analysis</p>
            <img :src="require('@/assets/projects/6/module4.svg')" alt="" class="fade-up-enter" style="">
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">界面的风格是产品定位的反映</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">The style of the interface is a reflection of the product positioning</h2>
            <img v-if="language=='ZH'" :src="require('@/assets/projects/6/stylefor4types.svg')" alt="" class="fade-up-enter" style="">
            <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/stylefor4types-EN.svg')" alt="" class="fade-up-enter" style="">
            <p v-if="language=='ZH'" class="fade-up-enter">深色风格为主的界面能够体现专业感和智能感，搭配多彩的插图则能够丰富页面的感觉，提供趣味性</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">The darker style of the interface reflects a sense of professionalism and intelligence, while colorful illustrations enrich the feel of the page and provide interest</p>
            <img v-if="language=='ZH'" :src="require('@/assets/projects/6/brandcolor.svg')" alt="" class="fade-up-enter" style="">
            <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/brandcolor-EN.svg')" alt="" class="fade-up-enter" style="">
            <div id="group1" style="margin: 24rem 0 24rem 0;transform: rotate(10deg) scale(2);">
                <img :src="require('@/assets/projects/6/details4.png')" alt="" id="details4" style="height: 10rem;width: auto;float: right;pointer-events: none">
                <img :src="require('@/assets/projects/6/details5.png')" alt="" id="details5" style="height: 10rem;width: auto;padding-top: 1rem;float: left;pointer-events: none">
                <img :src="require('@/assets/projects/6/details6.png')" alt="" id="details6" style="height: 10rem;width: auto;padding-top: 1rem;float: right;pointer-events: none">
                <div style="clear:both;"></div>
            </div>
            <p v-if="language=='ZH'" class="fade-up-enter">动画插图使界面更加有趣，并为用户提供更清晰的指导</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Animated illustrations make the interface more interesting and provide clearer guidance to the user</p>
            <div style="display: flex; flex-direction: row; gap: 2rem; align-items: center;justify-content: center;">
                <img :src="require('@/assets/projects/6/calibration.gif')" alt="" class="fade-up-enter" style="max-width: 240px;flex: 1;">
                <img :src="require('@/assets/projects/6/lookingforcores.gif')" alt="" class="fade-up-enter" style="max-width: 240px;flex: 1;">
            </div>
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">我们为什么不像其他产品那样用动画而不是实拍来作为训练指引？</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Why do we use animations instead of videos for the training guidance like others?</h2>
            <p v-if="language=='ZH'" class="fade-up-enter">最主要的原因是没钱。作为一个需要投入大量资金到研发中的初创公司，我们没有额外的资金去拍摄大量风格统一的实拍视频。并且在研发的早期，我们也不知道AI能够支持什么样的训练动作，动画来一个做一个的特性，使得我们拥有非常优秀的扩展性</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">The main reason was lack of money. As a startup that needs to invest a lot of money into R&D, we don't have the extra money to shoot a lot of live action videos in a uniform style. And in the early days of R&D, we didn't know what kind of training actions the AI could support. The nature of the animation to come one and do one allowed us to have excellent scalability</p>
            <p v-if="language=='ZH'" class="fade-up-enter">第一版的动画是这样的，画面丑陋，动作僵硬，于是在那年的国庆节，我花了7天时间闭关学习，迭代了第二版的动画，流畅多了，但我知道还有很大改善的空间</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">The first version of the animation was like this. The picture was ugly and the movements were stiff. So on the National Day of that year, I spent 7 days studying in retreat and iterated on the second version of the animation. It was much smoother, but I knew there was still a big room for improvement</p>
            <div style="display: flex;flex-direction: row;position: relative;">
                <img :src="require('@/assets/projects/6/animation-v1.gif')" alt="" class="fade-up-enter" style="flex: 1;width:50%">
                <img :src="require('@/assets/projects/6/animation-v2.gif')" alt="" class="fade-up-enter" style="flex: 1;width:50%">
                <p v-if="language=='ZH'" class="fade-up-enter" style="font-size: 0.5rem;position: absolute; bottom: -1.5rem;right: 0.5rem;color: var(--foreground-light-1);">*这是我做的所有动画中最难的那个</p>
                <p v-else-if="language=='EN'" class="fade-up-enter" style="font-size: 0.5rem;position: absolute; bottom: -1.5rem;right: 0.5rem;color: var(--foreground-light-1);">*The most difficult one of all the animations I made</p>
            </div>
            <p v-if="language=='ZH'" class="fade-up-enter">我为该项目制作了80个动作演示动画</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">I made 80 animations for the project </p>
            <img :src="require('@/assets/projects/6/animations-collection.gif')" alt="" class="fade-up-enter" style="">
            <p v-if="language=='ZH'" class="fade-up-enter">无心插柳柳成荫，我们发现动画如果通过app渲染，可以允许用户查看不同的角度，技术边界的扩展，为设计提供了更多的可能性，只可惜我们最终没有能够实现这个方案</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Unintentionally, we found that the animation rendered through the app will allow users to view the animation from different angles. The expansion of technical boundaries provides more possibilities for design. Unfortunately, we did not realize this solution in the end </p>
            <div style="display: flex; flex-direction: row; gap: 2rem; align-items: center;justify-content: center;">
                <img :src="require('@/assets/projects/6/training.gif')" alt="" class="fade-up-enter" style="max-width: 240px;">
            </div>
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">喜剧还是悲剧...</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Happy ending or sad ending...</h2>
            <p v-if="language=='ZH'" class="fade-up-enter">产品发布后，我们签约了KOL来定制训练课程，和三所学校合作开展青少年体式能课程，当我们以为一切都按部就班时，因为一些复杂的原因，我们还是花完了所有的研发资金，产品也以失败告终</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">After the product was released, we signed up KOLs to customize the training program, collaborating with 3 schools on youth physical fitness programs, and when we thought everything was on track, due to some complicated reasons, we ended up spending all the R&D money and the product ended in failure.</p>
            <p v-if="language=='ZH'" class="fade-up-enter">尽管这个项目没有让我一夜暴富，但在这个项目中我学到了在学校中从没有过的经验，一家小的创业公司为了严峻的环境中生存要作出怎么样的取舍，设计师能够如何支持界面之外的体验，技术和体验如何有机配合，这些问题无一不让我彻夜难眠，我甚至走进卖场推销我的产品！</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Although this project didn't make me rich overnight, it taught me lessons I never learned in school, the tradeoffs a small startup has to make to survive in a tough environment, how designers can support the experience beyond the interface, and how technology and experience can work together organically...all of these questions kept me up at night, and I even went into a store to pitch my product!</p>
            <p v-if="language=='ZH'" class="fade-up-enter">这段经历塑造了我对设计的理解，也希望通过这个故事帮你加深对我的了解，因此我仍选择与你分享这段有趣的经历</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">This experience has shaped my understanding of design and I hope to help you understand me better through this story, so I still choose to share this interesting experience with you!</p>
        </PageSection>
    </PageContentContainer>
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
            'skills',
            'tools',
            'title',
            'language'
        ],
        mounted(){
            gsap.fromTo(('#details4'),{
                x: 0,
            },{
                x: (document.querySelector('#details4').clientWidth - document.querySelector('.project-content-container').clientWidth),
                duration:0.8,
                scrollTrigger:{
                    trigger:'#group1',
                    scrub: 2,
                    // start:"center center",
                    end:'+=2000',
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
                    end:'+=2000',
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
                    end:'+=2000',
                }
            });

            gsap.fromTo('#flow',{
                y: 8 + 'rem',
                x:0,
                opacity:0,
                rotate:0,
            },{
                y: 0,
                x:-10,
                opacity:1,
                rotate:-5,
                scrollTrigger: {
                    trigger: '#flow',
                    toggleActions: 'restart none none none',
                }
            });


            gsap.fromTo('#ia',{
                y: 8 + 'rem',
                x:0,
                opacity:0,
                rotate:0,
            },{
                y: 0,
                x:10,
                opacity:1,
                rotate:5,
                scrollTrigger: {
                    trigger: '#ia',
                    toggleActions: 'restart none none none',
                }
            });

            // gsap.fromTo('#illustrations',{
            //     y: 8 + 'rem',
            //     x:0,
            //     opacity:0,
            //     rotate:0,
            // },{
            //     y: 0,
            //     x:-20,
            //     opacity:1,
            //     rotate:-10,
            //     scrollTrigger: {
            //         trigger: '#illustrations',
            //         toggleActions: 'restart none none none',
            //     }
            // });
        }
    }
</script>

<style scoped>
</style>