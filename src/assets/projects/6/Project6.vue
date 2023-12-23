<template>
    <PageContentContainer>
        <PageInfo :title="this.title" :category="this.category" :period="this.period" :skills="this.skills" :teams="this.teams"></PageInfo>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">总览</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Overview</h2>
            <p v-if="language=='ZH'" class="fade-up-enter">在这个项目中，我担任设计组长，和其他部门一起从零开始研发一款新的智能健身产品。我主导了所有的设计研发工作，从前期的用户研究，产品定位，到中期的产品设计，角色动画，再到后期的市场推广，销售运营等等，我参与了整个产品的生命周期，见证了他的诞生和死亡</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">In this project, I served as the design team leader, collaborating with other departments to develop a new intelligent fitness product from scratch. I led all design and development efforts, from early user research and product positioning to mid-term product design, character animations, and later-stage activities such as market promotion, sales operations, and more. I participated in the entire product lifecycle, witnessing its birth and death</p>
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">背景</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Context</h2>
            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">RaceFit International, 是一家专注于动作捕捉技术的硬件公司，他们希望能够借助他们的产品RaceFit CORE，为用户提供一种全新的智能健身体验。这是一款佩戴在用户的手腕和脚踝处的硬件，收集用户的训练数据，包括加速度、角速度和方向</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">RaceFit International, a hardware company specializing in motion capture technology, hopes to provide users with a new smart fitness experience with their product RaceFit CORE. CORE is a hardware worn on the user's wrist and ankle and collects the user's training data, including acceleration, angular velocity, and orientation</p>
                <img :src="require('@/assets/projects/6/background.png')" alt="" class="fade-up-enter" id="details16" style=""> 
            </div>
        </PageSection>
        <PageSection>
            <h2  v-if="language=='ZH'" class="fade-up-enter">创新的起点是了解用户</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">The starting point for innovation is to understand the user</h2>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">通过深入的用户研究，我们搜集并分析了用户在使用健身App的各个阶段遇到的问题。将这些问题按照“训练意愿”与“运动能力”的维度构建矩阵，将用户细分为四种典型类型。</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Through thorough user research, we have collected and analyzed the issues users encounter at various stages of using the fitness App. By constructing a matrix along the dimensions of "training willingness" and "exercise capacity," we have categorized users into four typical types.</p>
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details1.svg')" alt="" class="fade-up-enter" style="">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details1.svg')" alt="" class="fade-up-enter" style="">
            </div>
            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">现有市场上已经有大量的运动健身App，他们是否很好地解决这些用户需求呢？我们通过对国内外竞品的分析，发现健身App仍然存在一些设计机会。结合RaceFit的产品，我们有了一些初步的想法</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">There is already a plethora of exercise and fitness Apps on the current market, but do they effectively address these user needs? Through our analysis of domestic and international competitors, we have identified that there are still some design opportunities within fitness Apps.Combined with the RaceFit product, we have some initial ideas</p>
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details10-EN.svg')" alt="" class="fade-up-enter" id="details10" style="pointer-events: none;">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details10-EN.svg')" alt="" class="fade-up-enter" id="details10" style="pointer-events: none;">
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details11-EN.svg')" alt="" class="fade-up-enter" id="details11" style="pointer-events: none;">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details11-EN.svg')" alt="" class="fade-up-enter" id="details11" style="pointer-events: none;">
            </div>
            
            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">基于这三个设计机会，我们做了头脑风暴，通过亲和图和“可行性-重要性”矩阵进行分析，得到最终的目标概念</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Based on these three design opportunities, we brainstormed, analyzed through affinity diagrams and "feasibility-importance" matrices to get the final target concepts.</p>
                <img :src="require('@/assets/projects/6/sprint1.png')" alt="" class="fade-up-enter" style="pointer-events: none;">
            </div>
            
            <ValueProposition :language="this.language">
                <p v-if="language=='ZH'" class=""> 通过整合 RaceFit 的核心产品和技术，打造结合软件、硬件和人工智能的完整解决方案,为用户提供了全新的<strong>专业的、智能的、有趣的 </strong>健身体验</p>
                <p v-else-if="language=='EN'" class="">By integrating RaceFit's core products and technologies to create a complete solution that combines software, hardware and artificial intelligence, it provides users with a new professional, intelligent and fun fitness experience.</p>
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details2.png')" alt="" class="" id="details2">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details2.png')" alt="" class="" id="details2">
            </ValueProposition>
            
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

            <div class="v-stack">
                <h3 class="fade-up-enter">1. Calibration and Fitness test</h3>
                <p v-if="language=='ZH'" class="fade-up-enter">硬件在使用前需要进行校准，这对用户来说可不是什么好消息，经过和算法工程师的不断地讨论，我们为用户设计了简单的甩手摆腿的动作来进行校准，更加易学，易操作。我们还设计了一系列体能测试动作，帮助算法收集用户的运动数据，评估用户的运动能力</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">The hardware needs to be calibrated before use, which is not good news for users. After continuous discussion with algorithm engineers, we have designed a simple hand-waving movement for users to calibrate, which is easier to learn and operate.We also designed a series of fitness test maneuvers to help the algorithm collect data on the user's movement and assess the user's athletic ability</p>
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details14.svg')" alt="" id="details14" class="fade-up-enter" style="">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details14-EN.svg')" alt="" id="details14" class="fade-up-enter" style="">
            </div>
            <div class="v-stack">
                <h3 class="fade-up-enter">2. Translate the language of the algorithm for the user</h3>
                <p v-if="language=='ZH'" class="fade-up-enter">对于用户来说，他并不需要了解算法在背后是如何工作的，他们只关心自己的训练计划是什么。因此我们需要将算法的变量翻译成用户能够理解的参数，并建立变量和用户输入参数之间的关系</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">For the user, he doesn't need to know how the algorithm works behind the scenes, they only care about what their training program is. Therefore we need to translate the variables of the algorithm into parameters that the user can understand and establish the relationship between the variables and the user input parameters</p>
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details15.svg')" alt="" id="details14" class="fade-up-enter" style="">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details15-EN.svg')" alt="" id="details14" class="fade-up-enter" style="">
            </div>

            <div class="v-stack">
                <h3 class="fade-up-enter">3. Deft handling of algorithmic delays</h3>
                <p v-if="language=='ZH'" class="fade-up-enter">算法和普通程序的一个较大区别是，算法需要时间计算，因此用户可能并不能立即得到计算的结果。为此我们设计了一种半实时的机制，在用户下轮动作时反馈上一轮动作的表现</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">One of the big differences between algorithms and ordinary programs is that algorithms take time to compute, so the user may not get the result of the computation immediately. For this reason we have designed a semi-real-time mechanism that feeds back the performance of the previous round of actions to the user during the next round of actions</p>
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details16.svg')" alt="" id="details14" class="fade-up-enter" style="">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details16-EN.svg')" alt="" id="details14" class="fade-up-enter" style="">
            </div>

            <div class="v-stack">
                <h3 class="fade-up-enter">4. Unconscious collection of user feedback</h3>
                <p v-if="language=='ZH'" class="fade-up-enter">人工智能需要大量的用户数据进行计算，我们巧妙地在用户的使用流程中穿插了必要的数据收集节点，以此作为人工智能学习的资料</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Artificial intelligence requires a large amount of user data for calculation, and we cleverly interspersed the necessary data collection nodes in the user's use process as the material for artificial intelligence to learn</p>
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/details17.svg')" alt="" id="details19" class="fade-up-enter" style="width:">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/details17-EN.svg')" alt="" id="details19" class="fade-up-enter" style="">
            </div>
            
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">但我擅长的也没有丢</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">But I haven't lost what I'm good at</h2>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">根据系统方案所确定的功能列表，我们经过讨论确定了各项功能的结构、信息的层级、以及用户使用各个功能的流程</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">According to the list of functions determined by the system solution, we have determined the structure of each function, the level of information, and the process for users to use each function through discussion</p>
                <div style="position: relative;margin-bottom: 4rem;">
                    <img :src="require('@/assets/projects/6/flow-EN.svg')" alt="" id="flow" style="width: 90%;position: relative; top: 1rem;left: 1rem;">
                    <img :src="require('@/assets/projects/6/ia-EN.svg')" id="ia" alt="" style="width: 90%;position: absolute;left: 2rem; top:50%; box-shadow: rgba(0,0,0,0.5) 0 8px 16px;">
                </div>
            </div>

            <p v-if="language=='ZH'" class="fade-up-enter">整个App主要由4个模块组成，每个模块的设计都有一些有趣的经历</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">The entire app consists of four main modules, and each module's design comes with some interesting experiences. </p>
            
            <div class="v-stack">
                <h3 v-if="language=='ZH'" class="fade-up-enter">1. 导航和首次使用</h3>
                <h3 v-else-if="language=='EN'" class="fade-up-enter">1. Navigation and first-time use</h3>
                <img :src="require('@/assets/projects/6/module1.png')" alt="" class="fade-up-enter" style="">
            </div>
            
            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">竞品不同的是，我们专注于“专业”和“智能”的个性化训练计划，而不是内容多样化。由于我们的硬件销售盈利模式，不依赖广告或其他付费功能，因此我们并不需要用户停留在App中，鼓励即用即走的使用习惯。基于这个原则，我们首页只设有「今日训练」和「记录追踪」两个关键功能，以强调专业性。和竞品不同真的需要很大的勇气，<strong>并非为了不同而不同，也并非为了相同而相同，</strong>更重要的是找到产品的定位，并根据定位出发进行设计</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Unlike our competitors, we focus on "professional" and "intelligent" personalized training plans, rather than a diversity of content. Thanks to our profit model from hardware sales, we do not rely on advertising or other paid features, so we don't need users to linger in the App, encouraging a 'use-and-go' habit. In line with this principle, our homepage features only two key functionalities: 'Today's Training' and 'Progress Tracking,' to emphasize professionalism.Being different from competitors truly requires great courage. <strong>It's not about being different for the sake of being different, nor is it about being the same just for the sake of being the same. </strong>The most crucial aspect is finding the product's positioning and designing based on that positioning</p>
                <img :src="require('@/assets/projects/6/competitor.png')" alt="" class="fade-up-enter" style="width:100%; max-width: 480px;margin: 0 auto;">
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">专业训练计划有多种类型，用户还可以在这个模块中预览未来的训练计划，查看过往训练计划的完成情况，因此我设计了多种首页卡片的类型和插图，提供足够的“趣味”</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">There are various types of professional training plans, and users can preview future training plans and check the completion of past plans in this module. Therefore, I designed multiple types of homepage cards and illustrations to provide sufficient "fun" and engagement.</p>
                <img :src="require('@/assets/projects/6/navigation.png')" alt="" class="fade-up-enter" style="">
            </div>

            <div class="v-stack">
                <h3 v-if="language=='ZH'" class="fade-up-enter">2. 硬件配对和校准</h3>
                <h3 v-else-if="language=='EN'" class="fade-up-enter">2. Hardware Pairing and Calibration</h3>
                <img  :src="require('@/assets/projects/6/module2.png')" alt="" class="fade-up-enter" style="">
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">与许多其他设备的配对方式不同，我们的硬件不包含任何按钮。硬件唯一的激活方式是从充电器上取下，这将使其处于一直可被蓝牙发现的状态。因此当用户打开App时，系统就会尝试搜索附近的设备，如果设备数量与要求不匹配，我们会提示用户手动配对，谁曾想，这个看似小小的功能却困扰了我们很久...</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Our hardware differs from many other devices in terms of pairing, as it lacks any buttons. The sole activation method for the hardware is removing it from the charger, putting it in a constant state of Bluetooth discoverability. Consequently, when users open the app, the system attempts to search for nearby devices. If the number of devices doesn't meet the requirements, we prompt users to manually pair them. Who would have thought that this seemingly small feature would trouble us for so long...</p>
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/pair-flow.svg')" alt="" class="fade-up-enter" style="width:100%; max-width: 480px;margin: 0 auto;">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/pair-flow-EN.svg')" alt="" class="fade-up-enter" style="width:100%; max-width: 480px;margin: 0 auto;">
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">我们尝试了三种配对方式，用户研究显示，扫描 QR code 的方式是最受用户信赖和最稳定的。然而，在正式生产时，由于大量硬件处于被发现状态，工人难以准确识别并映射二维码数据。因此，我们不得不转向另外两个方案，而由于将CORE放置在手机上的方案，因为不同设备的蓝牙模块位置不同，影响了配对稳定性，因此最终，我们选择了从列表中选择的方案。很多时候，我们并非设计一个完美的方案，而是权衡各个因素找出平衡，因此<strong>不断调整因素的权重进行探索，才能帮助我们找到那个巧妙的平衡</strong></p>
                <p v-else-if="language=='EN'" class="fade-up-enter">We tried three pairing methods, and user research indicates that scanning QR codes is the most trusted and stable option. However, during formal production, due to a large number of devices being in a discoverable state, it's challenging for workers to accurately identify and map QR code data. Consequently, we had to use the other two solutions. The option of placing CORE on the phone was discarded due to variations in the Bluetooth module positions of different devices, impacting pairing stability. In the end, we opted for the solution of selecting from a list. Many times, we aren't designing a perfect solution but rather balancing various factors to find equilibrium. Therefore, <strong>continually adjusting the weight of these factors in exploration helps us discover that clever balance.</strong></p>
                <img :src="require('@/assets/projects/6/3-pairing-methods.png')" alt="" class="fade-up-enter" style="">
            </div>

            <div class="v-stack">
                <h3 v-if="language=='ZH'" class="fade-up-enter">3. 体能测验和记录</h3>
                <h3 v-else-if="language=='EN'" class="fade-up-enter">3. Physical fitness tests and records</h3>
                <img :src="require('@/assets/projects/6/module3.png')" alt="" class="fade-up-enter" style="">
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">用户完成体能测试之后，我们会根据用户的能力推荐他针对某个部位进行训练，然而我们在用户访谈中惊讶地发现，用户的“训练意愿”和“运动能力”不一定是匹配的，出于各种原因，用户可能想要训练的并不是他偏弱的部位，或者他偏弱的部位不适合进行训练，因此我们允许用户调整训练部位的优先顺序从而调整训练计划。<strong>理性判断的用户需要的不一定是用户想要的，</strong>这是一种理性和感性的矛盾，我时常思考这个矛盾但还没有结论。如果你也有这样的思考，欢迎和我交流。</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">After users complete their physical fitness test, we recommend specific training for a particular body part based on their abilities. However, we were surprised by user interviews that the user's "willingness to train" may not necessarily align with their "physical capabilities." For various reasons, users might want to train areas other than their weaker ones, or their weaker areas might not be suitable for training. Therefore, we allow users to adjust the priority order of training areas to customize their workout plans. <strong>What users need based on rational judgment may not be what they want.</strong> This is a contradiction between rationality and sensibility. I often ponder over this contradiction but have not reached a conclusion yet. If you also contemplate this, feel free to discuss it with me.</p>
                <img :src="require('@/assets/projects/6/change-order.gif')" alt="" class="fade-up-enter" style="max-width: 240px;margin: 0 auto;">
            </div>

            <div class="v-stack">
                <h3 v-if="language=='ZH'" class="fade-up-enter">4. 训练和分析</h3>
                <h3 v-else-if="language=='EN'" class="fade-up-enter">4. Training and analysis</h3>
                <img :src="require('@/assets/projects/6/module4.png')" alt="" class="fade-up-enter" style="">
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">我们为什么不像其他产品那样用动画而不是实拍来作为训练指引？最主要的原因是没钱。作为一个需要投入大量资金到研发中的初创公司，我们没有额外的资金去拍摄大量风格统一的实拍视频。并且在研发的早期，我们也不知道AI能够支持什么样的训练动作，动画来一个做一个的特性，使得我们拥有非常优秀的扩展性</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Why do we use animations instead of videos for the training guidance like others?The main reason was lack of money. As a startup that needs to invest a lot of money into R&D, we don't have the extra money to shoot a lot of live action videos in a uniform style. And in the early days of R&D, we didn't know what kind of training actions the AI could support. The nature of the animation to come one and do one allowed us to have excellent scalability</p>
            </div>
            
            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">第一版的动画是这样的，画面丑陋，动作僵硬，于是我请了7天假来闭关学习，迭代了第二版的动画，流畅多了，但我知道还有很大改善的空间</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">The first version of the animation was like this. The picture was ugly and the movements were stiff. So I ask for a 7 day leave to study and iterated on the second version of the animation. It was much smoother, but I knew there was still a big room for improvement</p>
                <div style="display: flex;flex-direction: row;position: relative;">
                    <img :src="require('@/assets/projects/6/animation-v1.gif')" alt="" class="fade-up-enter" style="flex: 1;width:50%">
                    <img :src="require('@/assets/projects/6/animation-v2.gif')" alt="" class="fade-up-enter" style="flex: 1;width:50%">
                    <p v-if="language=='ZH'" class="fade-up-enter" style="font-size: 0.5rem;position: absolute; bottom: -1.5rem;right: 0.5rem;color: var(--foreground-light-1);">*这是我做的所有动画中最难的那个</p>
                    <p v-else-if="language=='EN'" class="fade-up-enter" style="font-size: 0.5rem;position: absolute; bottom: -1.5rem;right: 0.5rem;color: var(--foreground-light-1);">*The most difficult one of all the animations I made</p>
                </div>
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">我为该项目制作了80个动作演示动画</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">I made 80 animations for the project </p>
                <img :src="require('@/assets/projects/6/animations-collection.gif')" alt="" class="fade-up-enter" style="">
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">无心插柳柳成荫，我们发现动画如果通过app渲染，可以允许用户查看不同的角度，技术边界的扩展，为设计提供了更多的可能性，只可惜我们最终没有能够实现这个方案</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Unintentionally, we found that the animation rendered through the app will allow users to view the animation from different angles. The expansion of technical boundaries provides more possibilities for design. Unfortunately, we did not realize this solution in the end </p>
                <div style="display: flex; flex-direction: row; gap: 2rem; align-items: center;justify-content: center;">
                    <img :src="require('@/assets/projects/6/training.gif')" alt="" class="fade-up-enter" style="max-width: 240px;">
                </div>
            </div>
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">界面的风格是产品定位的反映</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">The style of the interface is a reflection of the product positioning</h2>
            <img v-if="language=='ZH'" :src="require('@/assets/projects/6/stylefor4types.svg')" alt="" class="fade-up-enter" style="">
            <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/stylefor4types-EN.svg')" alt="" class="fade-up-enter" style="">

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">根据这三个关键词，我收集了情绪版，来为视觉设计提供指引</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Base on these three key words, I collect a moodboard to guide the visual design</p>
              <img :src="require('@/assets/projects/6/moodboard.png')" alt="" class="fade-up-enter" style="">
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">深色风格为主的界面能够体现专业感和智能感，搭配多彩的插图则能够丰富页面的感觉，提供趣味性</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">The darker style of the interface reflects a sense of professionalism and intelligence, while colorful illustrations enrich the feel of the page and provide interest</p>
                <img v-if="language=='ZH'" :src="require('@/assets/projects/6/brandcolor.svg')" alt="" class="fade-up-enter" style="">
                <img v-else-if="language=='EN'" :src="require('@/assets/projects/6/brandcolor-EN.svg')" alt="" class="fade-up-enter" style="">
            </div>
            
            <div id="group1" style="margin: 24rem 0 24rem 0;transform: rotate(10deg) scale(2);">
                <img :src="require('@/assets/projects/6/details4.png')" alt="" id="details4" style="height: 10rem;width: auto;float: right;pointer-events: none">
                <img :src="require('@/assets/projects/6/details5.png')" alt="" id="details5" style="height: 10rem;width: auto;padding-top: 1rem;float: left;pointer-events: none">
                <img :src="require('@/assets/projects/6/details6.png')" alt="" id="details6" style="height: 10rem;width: auto;padding-top: 1rem;float: right;pointer-events: none">
                <div style="clear:both;"></div>
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">必不可少地，我建立了设计系统来确保整个设计的一致性和提高设计效率</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Essentially, I established a design system to ensure consistency across the entire design and enhance design efficiency.</p>
                <img :src="require('@/assets/projects/6/design-system.svg')" alt="" class="fade-up-enter" style="">
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">我还设计了动画插图使界面更加有趣，并为用户提供更清晰的指导</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">I also designed animated illustrations to make the interface more interesting and provide clearer guidance to the user</p>
                <div style="display: flex; flex-direction: row; gap: 2rem; align-items: center;justify-content: center;width: 100%;">
                    <img :src="require('@/assets/projects/6/calibration.gif')" alt="" class="fade-up-enter" style="width:calc(50% - 1rem) ;max-width: 240px;flex: 1;">
                    <img :src="require('@/assets/projects/6/lookingforcores.gif')" alt="" class="fade-up-enter" style="width:calc(50% - 1rem) ;max-width: 240px;flex: 1;">
                </div>
            </div>
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">喜剧还是悲剧...</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Happy ending or sad ending...</h2>

            <p v-if="language=='ZH'" class="fade-up-enter">产品发布后，我们签约了KOL来定制训练课程，和三所学校合作开展青少年体式能课程，当我们以为一切都按部就班时，因为一些复杂的原因，我们还是花完了所有的研发资金，产品也以失败告终</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">After the product was released, we signed up KOLs to customize the training program, collaborating with 3 schools on youth physical fitness programs, and when we thought everything was on track, due to some complicated reasons, we ended up spending all the R&D money and the product ended in failure.</p>

            <p v-if="language=='ZH'" class="fade-up-enter">当我加入RaceFit时，我从未想过我会从一家从零开始的创业公司中学到这么多，我了解到融资的难度，体会到和时间赛跑的紧迫感，我被激发了无限的动力和潜能，去解决问题而不是抱怨现状。我认识到设计并非止步于画面，我需要步入生产，甚至<strong>走进展会推销我们的产品，</strong>这并不是我想象的那种光鲜亮丽的创业生活</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">When I joined RaceFit, I never imagined how much I would learn from a startup built from scratch. I gained insights into the challenges of fundraising and felt the urgency of racing against time. It ignited unlimited motivation and potential in me, pushing me to solve problems rather than complain about the current situation. I realized that design goes beyond visuals; I needed to step into production, and even <strong>participate in trade shows to promote our products.</strong> It wasn't the glamorous entrepreneurial life I had envisioned</p>

            <p v-if="language=='ZH'" class="fade-up-enter">在RaceFit，我们没有产品经理这个角色，而每个人都是产品经理，我们在会议上讨论一切关于产品的未来的计划，作为设计负责人，我还担任起整理这些需求和梳理优先级的工作。从那时起，我才真正意识到，<strong>一个好的产品并非构思一个天才的灵感，</strong>每天都有大量相似的想法涌现，真正的挑战是我们如何将一个个的点子付诸行动，安排优先级，落到实处，并不断收集反馈和迭代...</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">At RaceFit, we don't have the role of a product manager; instead, everyone serves as a product manager. We discuss everything about the future plans for the product in our meetings. As the design lead, I also take on the responsibility of organizing these requirements and prioritizing them. It was from that point onward that I truly realized <strong>a great product isn't just about conceiving a brilliant idea</strong> – Similar thoughts emerge every day. The real challenge is how we turn individual ideas into actions, prioritize, implement, continually gather feedback, and iterate...</p>

            <p v-if="language=='ZH'" class="fade-up-enter">最后，我学到了一个深刻的教训，<strong>如果一个产品不能切切实实地解决用户的需求，美观、性能、价格等等因素都会被远远地排除在外。</strong>我们获得了很多设计上的成功，我们获得了红点产品奖，入选了Microsoft的初创加速计划，似乎市场对产品的反响不错。但当你问我如果一个用户购买了我们的产品，独自一人开始使用，他真实的流程是什么，他的感受是什么？我很遗憾地说我真的不知道，在我们的设计中缺少了这一个环节，<strong>我们没有聆听用户真正的声音，</strong>而被他们在接受访谈时的客套话蒙骗了</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">In the end, I learned a profound lesson: <strong>if a product doesn't genuinely address the user's needs, factors like aesthetics, performance, and price are all significantly sidelined.</strong> We achieved a lot of design success, received the Red Dot Product Design Award, and were selected for Microsoft's startup accelerator program. It seemed like there was positive market feedback for the product. However, when asked about the real experience of a user purchasing our product, using it alone, and their feelings during the process, I regret to say that I genuinely don't know. There was a missing link in our design — <strong>we failed to listen to the authentic voices of users,</strong> being deceived by their courteous words during interviews</p>

            <p v-if="language=='ZH'" class="fade-up-enter">2022年9月我们停止了产品的更新，但我们仍然支付服务器的费用来让顾客继续使用购买了的产品。2023年10月，服务器被托管服务商单方面关停，紧接着我们收到了用户的抱怨，那一天，我感到愤怒和<strong>前所未有的欣慰</strong></p>
            <p v-else-if="language=='EN'" class="fade-up-enter">In September 2022, we ceased product updates, but continued to cover server costs to allow customers to use the purchased product. In October 2023, the hosting service unilaterally shut down the servers. Shortly after, we received complaints from users. On that day, I felt a mix of anger and <strong>an unprecedented sense of relief</strong></p>
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
            'teams',
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