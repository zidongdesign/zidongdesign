<template>
    <PageContentContainer>
        <PageInfo :title="this.title" :category="this.category" :period="this.period" :skills="this.skills" :teams="this.teams"></PageInfo>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">总览</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Overview</h2>
            <p v-if="language=='ZH'" class="fade-up-enter">在这个项目中，我担任产品设计师，我负责构建和维护产品组件库，确保设计一致性之余，还大大提高了用户测试的效率，以及开发的还原度。除此之外，我还参与了许多的产品功能设计工作，参与了产品的第一次大型改版</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">In this project, as a product designer, I was responsible for building and maintaining the product component library. This not only ensured design consistency but also significantly improved the efficiency of user testing and the fidelity of development. In addition to this, I actively participated in various product feature design tasks and collaborated with the team to launch the first major redesign of the product</p>
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">背景</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Context</h2>

            <p v-if="language=='ZH'" class="fade-up-enter">Microsoft Teams 是 Microsoft 旗下的协同工作办公软件，截至2023年4月，每月活跃用户数量超过3亿。汇报 App 是 Microsoft Teams 中的一个官方应用，旨在帮助用户邀请同事填写周报、日报等更新信息，以促进更高效的协同办公。在产品设计的早期，团队建立了三个用户画像：Assigner，Submitter 和 Reviewer，分别对应请求汇报，填写汇报和查看汇报这三个关键场景。整个产品围绕着这三个画像和场景展开</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Microsoft Teams is a collaborative office software under Microsoft's umbrella, with a monthly active user count exceeding 300 million as of April 2023. The Updates App is an official application within Microsoft Teams, designed to assist users in inviting colleagues to fill out updates such as weekly and daily reports, fostering more efficient collaborative work. In the early stages of product design, the team established three user personas: Assigner, Submitter, and Reviewer, corresponding to the key scenarios of reporting requests, submitting reports, and reviewing reports, respectively. The entire product is developed around these three personas and scenarios</p>
            <img :src="require('@/assets/projects/7/Updates in Microsoft Teams blog - Teaser image.png')" alt="" class="fade-up-enter" style="">
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">新鲜血液给团队注入了新的活力，新的组件库为产品带来多重裨益</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Fresh blood injected new vitality into the team. New component library brought multiple benefits to the product.</h2>

            <p v-if="language=='ZH'" class="fade-up-enter">在我了解项目背景，熟悉工作流程的过程中，我发现产品和设计存在文案不一致和UI样式的不一致的问题。与此同时，设计token使用的混乱，引用的组件散落在各个功能设计也暴露了文件管理混乱的问题。因此我作为团队新成员的第一个事项，是着手构建和维护产品的组件库，以提高设计一致性和设计效率。通过和团队设计师的沟通，我定位了三个问题的根源：</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">While understanding the project and its workflow, I noticed inconsistencies in copy and UI styles between the product and design. Simultaneously, issues with design token usage and scattered component references across different feature designs exposed problems with file management. Therefore, I started the initiative to build and maintain a component library for the product, aiming to enhance design consistency and efficiency. Through communication with the team designers, I identified the root causes of three issues:</p>

            <h3 v-if="language=='ZH'" class="fade-up-enter">1. 设计系统混用</h3>
            <h3 v-else-if="language=='EN'" class="fade-up-enter">1. Mixed design system</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">设计文件混用 Fluent 的 Design token + 组件库与Teams产品线调整过后的Design token + 组件库，这是不一致发生的根源</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">The inconsistency arises from the mixed use of Fluent Design tokens and component libraries with the Design tokens and component libraries adjusted after the Teams product line overhaul in the design files.</p>
            <img :src="require('@/assets/projects/7/mixed-design-system.svg')" alt="" class="fade-up-enter" style="">

            <h3 v-if="language=='ZH'" class="fade-up-enter">2. 组件构建不合理导致解绑</h3>
            <h3 v-else-if="language=='EN'" class="fade-up-enter">2. Bad-constructed component leading to detaching.</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">设计师进行设计时不得不解绑组件来满足设计要求，这使得局部设计更新后没有统一更新全局的设计，导致许多设计文件与产品的偏差越来越远</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">When designers create designs, they have to detach components to meet design requirements. This results in a lack of unified global updates after local design changes, leading to increasing discrepancies between many design files and the actual product.</p>
            <img :src="require('@/assets/projects/7/component-update-not-sync.svg')" alt="" class="fade-up-enter" style="">

            <h3 v-if="language=='ZH'" class="fade-up-enter">3. 旧设计文件散落各处</h3>
            <h3 v-else-if="language=='EN'" class="fade-up-enter">3. Old design files scattered everywhere.</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">完成交付的设计文件没有及时归档，在进行新设计时没有统一的地方引用旧设计作为基础</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">The delivered design files were not promptly archived, and there was no unified referencing of old designs as a foundation when creating new designs.</p>
            <img :src="require('@/assets/projects/7/file-management.svg')" alt="" class="fade-up-enter" style="">


            <h3 v-if="language=='ZH'" class="fade-up-enter">4. 交互原型少，组件状态丢失</h3>
            <h3 v-else-if="language=='EN'" class="fade-up-enter">4. Few interactive prototypes, component states are missing.</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">在进行设计中，针对组件的交互原型非常少，交互流程往往聚焦在用户流程上，组件的微交互细节缺失，导致开发不知道各个组件不同状态下的样式</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">In the design process, there are very few interactive prototypes for components. The interaction flow often focuses on user processes, neglecting the micro-interaction details of components. This leads to developers being unaware of the styles for different states of each component.</p>
            <img :src="require('@/assets/projects/7/component-not-interactive.svg')" alt="" class="fade-up-enter" style="">


            <ValueProposition :language="this.language">
                <p v-if="language=='ZH'" class="">Updates Components Library (UCL) 这一个<strong>统一的文件</strong>管理所有的<strong>可交互的组件，</strong><strong>对齐Fluent和Teams的设计语言</strong>，并且<strong>归档</strong>线上产品的设计稿</p>
                <p v-else-if="language=='EN'" class="">Updates Components Library (UCL) is to manage all <strong> interactive components </strong> through a <strong>unified file, </strong> <strong> aligning with the design language </strong> of Fluent and Teams, and <strong> archiving design </strong> for online products. </p>
                <img :src="require('@/assets/projects/7/library-construction.svg')" alt="" class="" style="width: 100%;">
            </ValueProposition>


        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">与传统组件库有所区别</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Different from traditional component libraries.</h2>

            <p v-if="language=='ZH'" class="fade-up-enter">在搭建组件库的过程中我意识到，如果只按传统组件库的框架去搭建，由于一般组件只包括占位字符而不储存实际文案，对于内容的管理仍然缺失，因此我认为组件库的架构需要与传统组件库有所区别。我从原子设计理论中获得灵感，我同样按照五个层级对组件库进行划分，分别是Atom, Molecules, Organisms, Pages, Template，但他们代表的层级已然不同</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">During the process of building the component library, I realized that if I follow the framework of a traditional component library, it may lack content management because general components only include placeholder text rather than storing actual copy. Therefore, I believe the architecture of the component library needs to differ from traditional ones. I drew inspiration from atomic design theory and, likewise, categorized the component library into five levels: Atom, Molecules, Organisms, Pages, and Template. However, the levels they represent have distinct meanings.</p>

            <h3 class="fade-up-enter">Atom</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">由于我们不需要自主定义 Design token，Atom 层不再是传统意义上的 Design token，而是我们用到的所有基础组件，对其进行交互原型的制作</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">As we don't need to define design tokens independently, the Atom layer is no longer a design token in the traditional sense. Instead, it includes all the foundational components we use, and we create interactive prototypes for them</p>
            <img :src="require('@/assets/projects/7/atom.png')" alt="" class="fade-up-enter" style="">

            <h3 class="fade-up-enter">Molecule</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">Molecule 是组合组件，任何通过对组件的再组合都会被归类到 Molecule 里，此时组件的使用场景逐渐明确，部份组件已经可以明确文案</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Molecules are composite components, and any components created through the recombination of other components are classified under Molecules. At this point, the use cases for components become clearer, and some components can already have specific text</p>
            <img :src="require('@/assets/projects/7/molecule.png')" alt="" class="fade-up-enter" style="">

            <h3 class="fade-up-enter">Organism</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">Organism 是最终负责管理内容的组件层级，而并非 Page。在 Organism 里，设计师大量复用 Molecule 和 Atom 来搭建场景明确的设计。在此时，文案就已经得到了非常明确的设计，因此我选择在 Organism 里进行最终设计文件的归档</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Organism is the final component level responsible for content management, rather than Page. Designers extensively reuse Molecules and Atoms within Organism to build designs with clear scenarios. At this point, the copy has been precisely designed, so I choose to archive the final design files within Organism</p>
            <img :src="require('@/assets/projects/7/organism.png')" alt="" class="fade-up-enter" style="">


            <h3 class="fade-up-enter">Template</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">Template 不再是原来 5 个层级的终点，而是来自 Teams 组件库中的 Shell 组件，我通过可插入式组件的概念将其重新制作，在各个插槽中插入 Organism 即是最终 Page 设计</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Template is no longer the endpoint of the original five levels but originates from the shell components in the Teams component library. I have reworked it using the concept of pluggable components, where inserting Organisms into various slots constitutes the final Page design</p>
            <img :src="require('@/assets/projects/7/template.png')" alt="" class="fade-up-enter" style="">

            <h3 class="fade-up-enter">Page</h3>
            <p v-if="language=='ZH'" class="fade-up-enter">Page 是所有页面的最终呈现，我没有为 Page 制作组件，原因是通过 Organism，所有的内容和设计稿都已经得到归档，因此不需要再一次进行打包。而且如果 Page 被打包成组件，那么每一次 Organism 更新时，都会使得Page需要重新发布，每次组件库更新的发布都会变得非常漫长和冗余。另一方面，当设计师在进行探索时，需要对部份组件进行解绑时，解绑的范围得到控制，没有解绑的 Organism 仍然具有被更新的能力</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Page is the ultimate presentation of all pages. I haven't created components for Page because, through Organism, all content and design drafts have already been archived, eliminating the need for repackaging. What's worse, if Page were packaged as a component, every time Organism is updated, it would require a publish of Page, making the release process for each component library update lengthy and redundant. On another hand, when designers are exploring and need to detach certain components, the scope of detachment is controlled. Organisms that haven't been detached still retain the ability to be updated</p>
            <img :src="require('@/assets/projects/7/page.png')" alt="" class="fade-up-enter" style="">

            <p v-if="language=='ZH'" class="fade-up-enter">总的来说，设计师除了直接拷贝 Page 中的页面，还可以从场景出发，选择合适的 Template,然后根据不同的插槽找到对应的 Organism，并调整 Organism 中的引用的 Molecule 和 Atom，从而达到引用此前设计页面的目的。而当组件更新时，这些更新会逐级传递到 Organism，因此所有引用了这些Organism的地方都会得到更新</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">In summary, besides directly copying pages from Page, designers can start from specific scenarios, choose the appropriate Template, and then, based on different slots, find the corresponding Organism. They can adjust the references to Molecules and Atoms within the Organism to achieve the goal of referencing previously designed pages. When components are updated, these updates will cascade down to Organism, ensuring that all instances referencing these Organisms receive the updates.</p>
            <img :src="require('@/assets/projects/7/structure.png')" alt="" class="fade-up-enter" style="">


        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">除了提高了一致性，设计效率也得到有效提高</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">In addition to improving consistency, design efficiency has also been effectively increased</h2>

            <p v-if="language=='ZH'" class="fade-up-enter">组件库上线后，获得了团队设计师的一致认同，在此后的项目设计中得到了广泛的应用</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">After the component library was launched, it gained unanimous approval from the team designers and was widely used in subsequent project designs.</p>
            <div class="h-stack" style="flex-wrap: wrap;gap:2rem">

                <Quote :avatar="require('@/assets/projects/7/sikang.png')" :name="'Sikang Li'" style="flex: 1 1 0;" v-if="language=='ZH'" class="fade-up-enter">
                    你的那个组件库真的<strong>太好用了！</strong>
                </Quote>
                <Quote :avatar="require('@/assets/projects/7/sikang.png')" :name="'Sikang Li'" style="flex: 1 1 0;" v-else-if="language=='EN'" class="fade-up-enter">
                    The Component library you built is <strong>awesome!</strong>
                </Quote>
                
                <Quote :avatar="require('@/assets/projects/7/sandra.png')" :name="'Sandra Yu'" style="flex: 1 1 0;" v-if="language=='ZH'" class="fade-up-enter">
                    哎子东，你有空给我介绍一下你的组件库呗，回头我给 Approve（Teams里的另一个官方应用） 也<strong>按照你的结构整一个</strong>
                </Quote>
                <Quote :avatar="require('@/assets/projects/7/sandra.png')" :name="'Sandra Yu'" style="flex: 1 1 0;" v-else-if="language=='EN'" class="fade-up-enter">
                    Hey, could you introduce me to your component library? I want to <strong>follow your structure and create one</strong> for Approval (another official app in Teams) afterward.
                </Quote>
            </div>

            <p v-if="language=='ZH'" class="fade-up-enter">通过简单配置，即插即用的组件就能达到非常高质量的还原度，无论是在交互设计演示还是用户测试中都发挥了不错的效果</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Through simple configuration, the plug-and-play components can achieve a very high level of fidelity, proving effective in both interactive design demos and user testing.</p>
            <video src="./interaction-demo.mp4" autoplay webkit-playsinline="true" playsinline="true" x5-video-player-type='h5-page' loop muted class="v-stack fade-up-enter"></video>

            <p v-if="language=='ZH'" class="fade-up-enter">设计效率也得到了大大的提高，以往我们要完成拥有程度细节的原型，需要将组件的状态拆解到不同的页面并连接原型，这不仅非常浪费设计师的精力在这些重复的操作上，而且会导致大量重复页面的出现</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Design efficiency has been significantly enhanced as well. Previously, when creating detailed prototypes, we had to break down component states into different pages and link them in the prototype. This not only wasted designers' efforts on repetitive tasks but also resulted in a proliferation of duplicate pages</p>
            <div class="v-stack fade-up-enter" style="gap: 0.5rem;">
                <video src="./Teams_flow.mp4" autoplay webkit-playsinline="true" playsinline="true" x5-video-player-type='h5-page' loop muted></video>
                <p v-if="language=='ZH'" style="font-size: 0.5rem; color: var(--foreground-light-1);line-height: 0.5rem;">通过 Teams components library 创建一个可交互原型的流程。播放速度 x2</p>
                <p v-else-if="language=='EN'"  style="font-size: 0.5rem; color: var(--foreground-light-1);line-height: 0.5rem;">Create an interactive prototype with Teams components library. Play speed x2</p>
            </div>
            
            <p v-if="language=='ZH'" class="fade-up-enter">通过在组件集内部连接交互逻辑，组件达到即插即用的状态，经过两三个步骤即可实现完全仿真的原型，设计师的精力被解放到思考其他设计问题上。不仅如此，设计师还可以根据实际需求，选择将组件的不同状态展示与否，来提供更详细的设计还是减少细节使流程的展示更清晰</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">By internally connecting the interaction logic within the component set, the components have reached a plug-and-play state. With just two or three steps, a fully simulated prototype can be achieved. This has liberated designers' energy to focus on contemplating other design challenges. Moreover, designers can choose to display or hide different states of components based on actual needs, providing more detailed designs or reducing details for a clearer display for user flow.</p>
            <div class="v-stack fade-up-enter" style="gap: 0.5rem;">
                <video src="./UCL_flow.mp4" autoplay webkit-playsinline="true" playsinline="true" x5-video-player-type='h5-page' loop muted></video>
                <p v-if="language=='ZH'" style="font-size: 0.5rem; color: var(--foreground-light-1);line-height: 0.5rem;">通过 UCL 创建一个可交互原型的流程。播放速度 x2</p>
                <p v-else-if="language=='EN'"  style="font-size: 0.5rem; color: var(--foreground-light-1);line-height: 0.5rem;">Create an interactive prototype with UCL. Play speed x2</p>
            </div>

            <p v-if="language=='ZH'" class="fade-up-enter">在 UCL 的帮助下，制作原型进行测试的效率和质量有显著的提升，UCL 上线后的 6 个月时间里，我们在usertesting.com 上开展了 6 次 Unmoderated usability testing，而这个数字在过去的一年里是 2</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">With the assistance of the UCL, the efficiency and quality of prototyping for testing have significantly improved. In the six months after the UCL launched, we conducted 6 Unmoderated usability testing on usertesting.com, whereas this number was only 2 in the past year.</p>
            <img :src="require('@/assets/projects/7/usertesting.svg')" alt="" class="fade-up-enter" style="">

        </PageSection>

        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">除了优化设计工作流，我还从用户的声音中寻找产品的改进机会</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">In addition to optimizing the design workflow, I also seek opportunities for product improvement from the voices of users.</h2>
            
            <p v-if="language=='ZH'" class="fade-up-enter">我们通过不同的渠道收集了用户的反馈，其中一个集中的问题是用户<strong>无法找到发布了的汇报请求和管理这些请求</strong></p>
            <p v-else-if="language=='EN'" class="fade-up-enter">We collected user feedback through various channels, and one common issue is that users are <strong>unable to find the published request and manage them</strong></p>

            <div class="h-stack" style="flex-wrap: wrap;gap: 2rem;">
                <Quote :name="'mlmiles1'" style="flex: 1 1 0;" class="fade-up-enter">
                    After creating my first one, <strong> the option to manage/add templates was replaced by Request an Update </strong> option in the upper left-hand corner. Confusing
                </Quote>

                <Quote :name="'Jad Pro'" style="flex: 1 1 0;" class="fade-up-enter">
                    If you want to disable a weekly update (or any update for that matter), you have to <strong>click 'request an update' button to even see the disable feature.</strong> Even after doing this, I was still being bombarded with notifications.
                </Quote>

                <Quote :name="'Gene Dixon'" style="flex: 1 1 0;" class="fade-up-enter">
                    I agree, I <strong>spent hours trying to figure out how to stop</strong> a weekly update request.
                </Quote>
                <Quote :name="'Katherine Owen'" style="flex: 1 1 0;" class="fade-up-enter">
                    Im working on using Updates to help manage update, maintenance requests, incidents reports, etc. But <strong>i don't seem to have the option to create or manage templates.</strong>
                </Quote>
            </div>

            <p v-if="language=='ZH'" class="fade-up-enter">我尝试在现有产品中定位问题的本质，找到了下列两个根源</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">I attempted to pinpoint the essence of the issues within the existing product and identified the following two root causes.</p>

            <h3 v-if="language=='ZH'" class="fade-up-enter">1. Assinger 是一个汇报的起点之一，如此重要的角色，他们甚至没有一个专门的页面可以进行工作</h3>
            <h3 v-else-if="language=='EN'" class="fade-up-enter">1. Assigner, one of the starting point of a report, as a such important role, they don't even have a dedicated page to work on</h3>
            <img :src="require('@/assets/projects/7/no-entry.png')" alt="" class="fade-up-enter" style="">

            <h3 v-if="language=='ZH'" class="fade-up-enter">2. 管理请求的入口和创建请求的按钮混合在一起，用户很难发现，点击创建请求后，就可以看到此前创建过的请求并管理他们 </h3>
            <h3 v-else-if="language=='EN'" class="fade-up-enter">2. Create request and manage request are mixed up into one button. It's difficult for users to discover, that after clicking "Create Request," they can view and manage the requests they previously created.</h3>
            <img :src="require('@/assets/projects/7/mixed-entry.png')" alt="" class="fade-up-enter" style="">
        </PageSection>

        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">小优化加大调整，轻重有度，充分调度资源</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Minor optimizations coupled with major adjustments, striking a balance between subtlety and significance, effectively utilizing resources.</h2>

            <p v-if="language=='ZH'" class="fade-up-enter">根据我们对用户的了解，Assigner，往往还是 Reviewer 甚至是 Submitter，他们经常会在其他页面活动。 为了让用户能够找到入口并管理他们的 Request，其中一个能够快速响应的方案，是提供足够的便捷的入口，穿插在其他页面的流程中。这个小的优化需要的资源较少，因此很快得到了支持和落地，也为后续的大调整做好铺垫</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Based on our understanding of users, Assigners often also serve as Reviewers or even Submitters, and they frequently navigate to other pages. One responsive solution is to provide sufficient and convenient entry points interspersed throughout other pages and user flows. This small optimization required relatively fewer resources, so it quickly gained support and was implemented. It also laid the groundwork for subsequent major adjustments</p>
            <img :src="require('@/assets/projects/7/added-entry.png')" alt="" class="fade-up-enter" style="">

            <p v-if="language=='ZH'" class="fade-up-enter">问题的另一面是用户没有建立起一个专门管理 Request 的习惯，如果任凭管理 Request 的入口散落各处，他们还是难以建立清晰的管理 Request 的流程。因此我们需要设计一个专门页面供 Assigner 管理这些 Request。似乎这个设计是显而易见的，因为我们的竞品都是这样处理，但我还是重新梳理了一遍信息架构，确保如此兴师动众的改动是合理的</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">The other aspect of the issue is that users have not developed a habit of managing requests in a dedicated place. If the entry points for managing requests are scattered everywhere, they still struggle to establish a clear process for managing requests. Therefore, we need to design a dedicated page for Assigners to manage these requests. While this design may seem obvious, as our competitors handle it this way, I have reexamined the information architecture to ensure that such a significant change is justified.</p>
            <img :src="require('@/assets/projects/7/ia-restructure.svg')" alt="" class="fade-up-enter" style="">

            <p v-if="language=='ZH'" class="fade-up-enter">我们在左侧添加 tab 和右侧添加按钮中做了 A/B 测试[1]，用户的声音是一边倒地选择了添加 tab，这大大地支持了这个设计，也增强了我的信心</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">We conducted A/B tests [1] with two options: adding tabs on the left or buttons on the right. The user feedback overwhelmingly favored adding tabs, providing strong support for this design, also building my confidence</p>
            <div class="h-stack" >
                <div class="v-stack" style="gap: 0.25rem;">
                    <img :src="require('@/assets/projects/7/optiona.png')" alt="" class="fade-up-enter" style="width: 100%;">
                    <p style="font-size: 0.5rem;line-height: 0.5rem;" class="fade-up-enter">Option A</p>
                </div>
                <div class="v-stack" style="gap: 0.25rem;">
                    <img :src="require('@/assets/projects/7/optionb.png')" alt="" class="fade-up-enter" style="width: 100%;">
                    <p style="font-size: 0.5rem;line-height: 0.5rem;" class="fade-up-enter">Option B</p>
                </div>
            </div>

            <p v-if="language=='ZH'" class="fade-up-enter">明确入口的位置后，我设计了相关的页面。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">After determining the location of the entry point, I designed the relevant pages. </p>
            <img :src="require('@/assets/projects/7/manage-page.png')" alt="" class="fade-up-enter" style="">

            <p v-if="language=='ZH'" class="fade-up-enter">针对顶部的创建新 Request 的卡片，我做了不同的探索，并选择了现在的方案，更加吸引眼球和传递更加清晰的信息</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">For the "New Request" cards on the top, I explored different options and chose the current solution, which is more eye-catching and conveys clearer information</p>
            <img :src="require('@/assets/projects/7/explorations.png')" alt="" class="fade-up-enter" style="">

            <p v-if="language=='ZH'" class="fade-up-enter">我对组件的各种状态也进行了设计，尽管 Figma 已经提供了很好的开发对接功能，但必要的细节还是需要进行标注，以提高开发效率和还原度</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">I also designed various states for the components. Although Figma provides excellent development integration features, it is still necessary to annotate the essential details to enhance development efficiency and accuracy in reproduction</p>
            <img :src="require('@/assets/projects/7/spec.png')" alt="" class="fade-up-enter" style="">
            
        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">故事结束在一个匆忙的离开</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">The story concludes with a hurried departure</h2>

            <p v-if="language=='ZH'" class="fade-up-enter">在完成这个设计后，我被紧急征召到另外一个项目中去。没能持续关注功能上线后的数据，是一个挺大的遗憾</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">After completing this design, I was urgently recruited into another project. Not being able to continuously monitor the data after the feature went live is a regret</p>

            <p v-if="language=='ZH'" class="fade-up-enter">在这个项目中，让我感触最深的是，国内国外看待汇报的态度是完全不一样的，在国外，这个更像是一个帮助团队更新的“自发性”的工具；而在国内，这更像是一个自上而下进行信息收集的“管理”工具。以此为契机，我和 Sikang 还以“中国文化在设计中的印迹”这个主题开展了不少研究和分享。因此，<strong>“了解你的用户”，真的不是一句口号。</strong>无论文化如何改变，受众如何不同，唯一不变的原则就是我们需要了解我们的用户</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">In this project, what struck me the most is the stark difference in attitudes towards reporting between domestic and international perspectives. Abroad, it seems more like a "voluntary" tool to help teams update; whereas in China, it appears more like a "management" tool for top-down information collection. Seizing this opportunity, Sikang and I conducted extensive research and sharing on the theme of "The Imprint of Chinese Culture in Design." Therefore, <strong>"understand your users" is not just a slogan.</strong> Regardless of how culture changes or the audience differs, the principle that never changed is our need to understand our users</p>
            <img :src="require('@/assets/projects/7/china-design-pattern.png')" alt="" class="fade-up-enter" style="">

            <p v-if="language=='ZH'" class="fade-up-enter"><strong>没有什么比成为用户能够更快地了解用户。</strong>这是我在这个项目中的另一个体会。作为设计师，我们如果能够真正将亲手设计的产品用起来，甚至爱上他依赖他，那么我们不仅能够发现很多体验的问题，还能将产品故事讲好，充分认识产品的价值所在。于是我在UCL发布之后，通过 Updates 发布了一个收集 UCL 使用问题的 request，邀请大家填写反馈。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter"><strong>Nothing helps you understand users faster than being a user yourself. </strong> This is another learning I had in this project. As designers, if we can truly use the product we design,  become dependent on it even fall in love with it, we not only discover many experience problems but also effectively convey the story of the product, fully understanding its value. After the release of UCL, I posted a request on Updates to collect feedback on UCL usage, inviting everyone to share their experiences.</p>
            <img :src="require('@/assets/projects/7/call-to-use.png')" alt="" class="fade-up-enter" style="">

            <p v-if="language=='ZH'" class="fade-up-enter">最后，我还是认为我们真的不能叫 Updates</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">In the end, I still believe that we really can't name it "Updates"</p>

        </PageSection>
    </PageContentContainer>
</template>

<script>
    export default {
    name: "Project7",
    data() {
        return {};
    },
    props: [
        'category',
        'period',
        'skills',
        'teams',
        'title',
        'language'
    ],
    mounted() {
    },
}
</script>

<style scoped>
</style>