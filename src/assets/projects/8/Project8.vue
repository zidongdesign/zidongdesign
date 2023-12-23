<template>
    <PageContentContainer>
        <PageInfo :title="this.title" :category="this.category" :period="this.period" :skills="this.skills" :teams="this.teams"></PageInfo>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">总览</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Overview</h2>
            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">在这个项目中，我担任产品设计师，与美国设计师和用户研究员一起合作，设计完善了 Content Safety Studio 并正式推出。此后不久，Content Safety 作为 Azure AI Studio 的重要一环，并在 Microsoft Ignite 2023 中亮相，在这个产品中，我和团队一起，进行了多轮设计探索并且通过用户研究验证了这些设计，推进了一个重要组件的迭代设计</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">In this project, I served as a product designer, collaborating with American designers and user researchers. We worked together to design and refine Content Safety Studio, which was Generally Available. Shortly thereafter, Content Safety emerged as a crucial component of Azure AI Studio, making its debut at Microsoft Ignite 2023. I take great pride in the fact that the design I was responsible for plays such a significant role in AI Studio. In this product, I, along with the team, conducted multiple rounds of design exploration and validated these designs through user research, driving the iterative design of a crucial component</p>
                <img :src="require('@/assets/projects/8/before-after.svg')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>
            

        </PageSection>

        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">背景</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Context</h2>

            <Quote :name="'Satya Nadella, CEO of Microsoft'" :avatar="require('@/assets/projects/8/satya.png')">
                <strong>Safety is the most important feature of our AI platform.</strong> It's not something you bolt on later, it's something we shift left on. And with our new safety tooling, you can detect and filter harmful user-generated and AI-generated content in your applications and services.
            </Quote>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">Azure AI Content Safety 是一个全新的服务，旨在帮助用户检测和过滤其应用程序和服务中的有害用户生成和AI生成的内容。用户还可以使用交互式的Azure AI Content Safety Studio，查看、探索和尝试在不同模态下检测有害内容，并获得示例代码。在 AI 的新纪元，我们肩负着“负责任的 AI”这一使命，与其他 AI 服务一起合并成 Azure AI Studio</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Azure AI Content Safety a new service that helps users detect and filter harmful user-generated and AI-generated content in their applications and services. Users can also use interactive Azure AI Content Safety Studio to view, explore, and try out sample code for detecting harmful content across different modalities. In the new era of AI, we shoulder the mission of "Responsible AI," merging with other AI services to form Azure AI Studio</p>
                <img :src="require('@/assets/projects/8/ignite.png')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>
        </PageSection>

        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">被合并到更宏大的产品，既是认可也是鞭策，既是机遇也是挑战</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Being merged into a larger product is both recognition and a spur, both opportunities and challenges.</h2>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">Content Safety 的其中一个核心功能，是通过四个可以分别设置阈值的过滤器，帮助用户阻挡不安全内容。</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">One of the core features of Content Safety is the use of filters with four individually threshold to help users block unsafe content.</p>
                <img :src="require('@/assets/projects/8/merged.svg')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">在这个核心体验合并到 AI Studio 的前夕，我们重新审阅了这个组件，发现了许多问题：</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">In the run-up to the integration of this core experience into AI Studio, we reviewed this component and identified several issues:</p>
                <img :src="require('@/assets/projects/8/aacs.png')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>

            <div class="v-stack">
                <h3 v-if="language=='ZH'" class="fade-up-enter">1. 可访问性问题</h3>
                <h3 v-else-if="language=='EN'" class="fade-up-enter">1. Accessibility issues</h3>
                <p v-if="language=='ZH'" class="fade-up-enter">非标准组件带来非常严重的可访问性问题，尤其是不能满足面对色盲色弱用户的包容性设计原则</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">The non-standard components for the filter brought about severe accessibility (A11y) issues, especially in design considerations for colorblind and visually impaired users</p>
                <img :src="require('@/assets/projects/8/problem1.png')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>

            <div class="v-stack">
                <h3 v-if="language=='ZH'" class="fade-up-enter">2. 颜色代表的含义不清晰</h3>
                <h3 v-else-if="language=='EN'" class="fade-up-enter">2. The meaning of color is unclear</h3>
                <p v-if="language=='ZH'" class="fade-up-enter">组件使用红色和绿色代表允许还是禁止，当用户将所有严重程度的内容都设置为允许通过时，他看到的将是 4 个绿色箭头，然而此时却是对系统最危险的设置，这点使得用户非常困惑</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">The components use red and green to represent allow or block. When a user sets all severity levels to allow, they see four green arrows. However, this configuration is the most perilous for the system. This aspect causes significant confusion for users.</p>
                <img :src="require('@/assets/projects/8/problem2.png')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>
            
            <div class="v-stack">
                <h3 v-if="language=='ZH'" class="fade-up-enter">3. 组件的样式设计和 Fluent 不一致</h3>
                <h3 v-else-if="language=='EN'" class="fade-up-enter">3. The styling of the component is not consistant with Fluent</h3>
                <p v-if="language=='ZH'" class="fade-up-enter">箭头、红绿色这些元素非常地吸引眼球，不仅与Fluent的视觉风格不一致，还过度吸引用户的注意力</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">The use of arrows and red-green colors is overly attention-grabbing. Not only does it deviate from the Fluent visual style, but it also excessively draws the user's attention</p>
                <img :src="require('@/assets/projects/8/problem3.svg')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>
            
            <ValueProposition :language="this.language">
                <p v-if="language=='ZH'" class="" > 内容安全过滤器是在 AI Studio 中的一个通用共享组件，为用户配置内容安全提供<strong>包容的，简单的，一致的 </strong>的体验</p>
                <p v-else-if="language=='EN'" class=""> Content Safety Filter is a shared component in Azure AI studio, provide <strong>Inclusive, Simple, and Consistant</strong> experience for users to configure a content safety.</p>
                <img :src="require('@/assets/projects/8/value-proposition.svg')" alt="" style="width: 100%;">
            </ValueProposition>

        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">通过设计探索，我和团队一起深入到问题的背面</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Through design exploration, we delved deeper into the underlying issues together with the team</h2>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">我们首先围绕设计模式进行探索。经过讨论，我们从设计的角度认为，滑动条的这个模式更加符合我们的需求，它相对于下拉选项更能直观地反映用户设置的值在范围中的位置；并且比单选组更能体现在滑块左右两侧，所代表的通过和阻止的对比关系</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">We initially explored around design patterns. After discussion, from a design perspective, we found that the slider pattern better suited our needs. It is more intuitive than a dropdown option in reflecting the position of the value within the range; additionally, it better conveys the contrasting relationship between allowing and blocking, which is on the left and right sides of the thumb, compared to a radio button group.</p>
                <img :src="require('@/assets/projects/8/design-pattern.svg')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">围绕着滑动条这个设计模式，我们进行了更多的探索</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Around the slider design pattern, we conducted more exploration</p>
                <img :src="require('@/assets/projects/8/explorations.png')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">但经过不断的迭代，我们发现，有三个原则总是不能同时保持一致：</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">However, through continuous iterations, we gradually discovered that three principles could not always be consistent simultaneously: </p>

                <p v-if="language=='ZH'" class="fade-up-enter">1. 在 Content safety 这个语境下，用户设置的值越大，应该意味着越安全</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">1. In the context of Content Safety, a higher value set by the user should imply greater safety.</p>
                <p v-if="language=='ZH'" class="fade-up-enter">2. 用户设置的值应该与 API 请求头中需要设置的值保持一致</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">2. The value set by the user should align with the value needed in the API request header.</p>
                <p v-if="language=='ZH'" class="fade-up-enter">3. 滑动条的值从左至右应该递增</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">3. The slider's value should increase from left to right</p>
            </div>


            <div class="h-stack fade-up-enter" style="flex-wrap: wrap;padding: 1rem; border: 1px var(--foreground-light-4) solid;" >
                <p v-if="language=='ZH'" style="flex: 1 1 0; min-width: 240px;">以这个方案为例，用户当前设置的值与 API 一致，滑动条的值从左至右递增，但是当用户将滑动条拉到最右侧时，其实是系统最危险的时候，这与 Content Safety 的这个语境不符</p>
                <p v-else-if="language=='EN'" style="flex: 1 1 0; min-width: 240px;">Using this options as an example, the user's current setting value aligns with the API, and the slider value increases from left to right. However, when the user slides the bar all the way to the right, it actually represents the most dangerous state for the system. This does not align with the context of Content Safety</p>
                <img :src="require('@/assets/projects/8/bigger-value-more-dangerous.svg')" alt="" style="flex: 1 1 0; min-width: 240px;">
            </div>

            <p v-if="language=='ZH'" class="fade-up-enter">团队内部一致的共识是，API 和界面应该保持一致，并且滑动条从左至右递增的的模式几乎不可动摇。<strong>那么，我们必须保持用户设置在安全的语境下的一致性吗？</strong></p>
            <p v-else-if="language=='EN'" class="fade-up-enter">The unanimous consensus within the team is that the API and the interface should remain consistent, and the pattern of the slider increasing from left to right is nearly indisputable. <strong>So, do we have to maintain consistency in the context of user settings for safety? </strong></p>

        </PageSection>

        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">了解用户是在众多设计方案中作出抉择的基石</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Understanding users is the cornerstone of making choices among numerous options</h2>
            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">为了解答这个疑问，我进行了一次快速的 A/B 测试。我选取两个经过多轮迭代后的方案并制作了交互原型。编写非监督式任务描述后，通过 Usertesting.com 招募了20位用户。这些用户将会被分为两组，分别以不同的先后顺序看到 Option A 和 Option B。实验要求他们完成三个任务：<br>1. 描述对整个组件的初步理解；<br>2. 结合过滤结果描述对组件的理解；<br>3. 结合过滤结果设置滑动条以过滤特定内容</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">To answer this question, I conducted a quick A/B test. I selected two solutions that had undergone multiple rounds of iteration and created interactive prototypes. After writing a description for a non-supervised task, I recruited 20 users through Usertesting.com. These users were divided into two groups, each seeing Option A and Option B in different sequences. The experiment required them to complete three tasks: <br>1. Describe their initial understanding of the entire component; <br>2. Describe their understanding of the component in conjunction with filtering results; <br>3. Set the slider to filter specific content in conjunction with filtering results</p>

                <div class="h-stack" style="width: 100%;">
                    <div class="v-stack fade-up-enter" style="width: calc(50% - 0.5rem); padding: 1rem; border: 1px var(--foreground-light-4) solid; box-sizing: border-box;">
                        <video src="./option-a.mp4" autoplay webkit-playsinline="true" playsinline="true" x5-video-player-type='h5-page' loop muted class="v-stack"></video>
                        <h3 class="">Option A</h3>
                        <p v-if="language=='ZH'" class="">用户设置的是系统的敏感性，更大的值意味着更安全</p>
                        <p v-else-if="language=='EN'" class="">What user is setting is safety sensitivity，bigger value means less dangerous</p>
                    </div>
                    <div class="v-stack fade-up-enter" style="width: calc(50% - 0.5rem); padding: 1rem; border: 1px var(--foreground-light-4) solid; box-sizing: border-box;">
                        <video src="./option-b.mp4" autoplay webkit-playsinline="true" playsinline="true" x5-video-player-type='h5-page' loop muted class="v-stack "></video>
                        <h3 class="">Option B</h3>
                        <p v-if="language=='ZH'" class="">用户设置的是系统的过滤器的阈值，更大的值意味着通过更多不安全内容</p>
                        <p v-else-if="language=='EN'" class="">What user is setting is filter threshold，bigger value means more dangerous</p>
                    </div>
                </div>
            </div>
            

            <div class="v-stack">
                <h3 v-if="language=='ZH'" style="" class="fade-up-enter">原始数据</h3>
                <h3 v-else-if="language=='EN'" style="" class="fade-up-enter">Raw data</h3>
                <img :src="require('@/assets/projects/8/raw-data.svg')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>

            <div class="v-stack">
                <h3 v-if="language=='ZH'" style="" class="fade-up-enter">有趣的发现</h3>
                <h3 v-else-if="language=='EN'" style="" class="fade-up-enter">Interesting findings</h3>
                <p v-if="language=='ZH'" class="fade-up-enter">通过数据我们有一个有趣的发现，首先看到 Option A 的用户，基本都能对 Option B 有正确理解，然而先看到 Option B 的用户，却只有 4 名用户成功“反转”了他们的思维，并成功理解 Option A，在错误理解的 6 个用户中，有 4 位认为 Option A 只是样式上的区别。基于这个现象，我们大胆地假设，用户其实能够正确理解 Option B 所代表的对阈值的设置，并且由于 Option B 将系统即将阻止的内容放在更明显的位置，用户能更深刻地理解系统当前的设置，以至于他们建立了固有认知从而没能正确理解 Option A</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Through the data, we made an interesting discovery. Users who initially saw Option A could generally understand Option B correctly. However, users who saw Option B first had only four successfully "reversed" their thinking to understand "Option A" correctly. Among the six users who misunderstood, four thought that Option A was merely a stylistic difference. Based on this phenomenon, we boldly hypothesized that users could actually understand the threshold settings represented by Option B correctly. Due to Option B <strong>placing what content the system is going to block in a more prominent position,</strong> users can have a deeper understanding of the current system settings. As a result, they established an inherent cognitive bias that prevented them from correctly understanding Option A</p>
            </div>

            <p v-if="language=='ZH'" class="fade-up-enter">通过这次测试，我们得到结论，为了保持 API 和界面的一致，并且遵循滑动条的模式，我们可以选择<strong>用设置阈值而不是设置敏感度来表示内容安全</strong></p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Through this test, we concluded that, for the sake of maintaining consistency between the API and the interface, and following the slider pattern, we can choose to <strong>represent content safety by setting thresholds rather than adjusting sensitivity.</strong></p>

        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">迭代，验证，再迭代</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Iterate, validate, iterate again</h2>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">在第一轮的用户测试中，我们还发现了一些 Option B 的可用性问题的端倪，于是我们进一步探索和迭代，得到了 Option C。为了进一步验证 Option C 的设计是有效的，我们开展了第二次用户测试，这次测试由用户研究员筹备和开展</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">In the first round of user testing, we also identified some signals of usability issues with Option B. Consequently, we further explored and iterated, leading to the development of Option C. To further validate the effectiveness of the Option C design, we conducted a second round of user testing, which was organized and carried out by user researchers.</p>

                <div class="h-stack" style="width: 100%;">
                    <div class="v-stack fade-up-enter" style="width: calc(50% - 0.5rem); padding: 1rem; border: 1px var(--foreground-light-4) solid; box-sizing: border-box;">
                        <video src="./option-b2.mp4" autoplay webkit-playsinline="true" playsinline="true" x5-video-player-type='h5-page' loop muted class="v-stack"></video>
                        <h3 class="">Option B-2</h3>
                        <p v-if="language=='ZH'" class="">数字在刻度之间，用区域表示系统阻止的内容</p>
                        <p v-else-if="language=='EN'" class="">The number stays <strong>between tick marks,</strong> and the area indicates what the system is blocking</p>
                    </div>
                    <div class="v-stack fade-up-enter" style="width: calc(50% - 0.5rem); padding: 1rem; border: 1px var(--foreground-light-4) solid; box-sizing: border-box;">
                        <video src="./option-c.mp4" autoplay webkit-playsinline="true" playsinline="true" x5-video-player-type='h5-page' loop muted class="v-stack"></video>
                        <h3 class="">Option C</h3>
                        <p v-if="language=='ZH'" class="">数字停在刻度上，用文本说明系统阻止的内容</p>
                        <p v-else-if="language=='EN'" class="">The number stays <strong>at the tick mark,</strong> and the text indicates what the system is blocking</p>
                    </div>
                </div>
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">通过这次测试，我们再次确认了此前 Option B 所发现的可用性问题是需要引起重视的的：<strong>用户试图将滑块停在数字的正下方，</strong>而当他们在 Option B 中无法这样做时，这让他们感到疑惑，甚至怀疑自己对系统的理解</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Through this test, we once again confirmed that the usability problem identified with Option B need much attention: <strong>users attempted to place the slider directly under the numbers,</strong> and when they couldn't do this in Option B, it confused them, and make them doubt with their understanding of the system</p>
                <video src="./option-b-problem.mp4" autoplay webkit-playsinline="true" playsinline="true" x5-video-player-type='h5-page' loop muted class="v-stack fade-up-enter" style="width: 100%; max-width: 400px;margin: 0 auto;"></video>
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">除此之外，我们还发现了其他的可用性问题：</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Apart from this, we also identified other usability issues:</p>
                <img :src="require('@/assets/projects/8/findings1.png')" alt="" class="fade-up-enter" style="width: 100%;">
                <img :src="require('@/assets/projects/8/findings2.png')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>

            <p v-if="language=='ZH'" class="fade-up-enter">Option C 有更少的可用性问题，并且我们还发现用户通过文本能够清晰理解什么内容会被阻挡，Option B 通过红绿色和区块来帮助用户理解的假设并没有显著地更加有效。因此，我基于 Option C 再次迭代了设计</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Option C has fewer usability issues, and we also found that users could clearly understand what content would be blocked through the text. The assumption that Option B, with its red-green color scheme and blocks, would be significantly more effective in helping users understand proved not to be true. Therefore, based on Option C, I iterated the design once again</p>

        </PageSection>
        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">阶段性地，我们找到了一个合适解</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">In stages, we arrived at a suitable solution</h2>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">最后我们又回到了最基础的滑动条。将通过和阻止何种内容放到滑动条上，并没有更好地帮助用户理解，因此不如将他们放到一个固定的地方来帮助用户快速定位，这样一来，使用基础滑动条能减少开发成本和可访问性风险</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">In the end, we returned to the most basic slider. Placing the what knid of content will be allowed and blocked on the slider did not better assist users in understanding. Therefore, it is more effective to position them in a fixed place to help users quickly locate the information. In this way, the slider does not need customization, reducing development costs and accessibility risks.</p>
                <video src="./final.mp4" autoplay webkit-playsinline="true" playsinline="true" x5-video-player-type='h5-page' loop muted class="v-stack fade-up-enter" style="width: 100%; max-width: 400px;margin: 0 auto;"></video>
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">我们还和 A11y 团队一起，针对可访问性进行了审阅和设计调整</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">We also collaborated with the Accessibility (A11y) team to review and make design adjustments for accessibility</p>
                <img :src="require('@/assets/projects/8/final.png')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>

            <div class="v-stack">
                <p v-if="language=='ZH'" class="fade-up-enter">最后，我完成了设计的收尾工作，输出详细的设计规范</p>
                <p v-else-if="language=='EN'" class="fade-up-enter">Finally, I wrapped up the design and produced detailed design specifications</p>
                <img :src="require('@/assets/projects/8/spec.svg')" alt="" class="fade-up-enter" style="width: 100%;">
            </div>

            <p v-if="language=='ZH'" class="fade-up-enter">尽管组件现在已经在产品上线，但我们知道这还远没有结束，我们陆续听到内部和外部的反馈声音，我们计划在下一次功能调整到 8 个刻度时，针对这些问题进一步优化</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Even though the component is now live in the product, we understand that it's far from over. We continue to receive feedback both internally and externally. We plan to further optimize in the next feature adjustment when there are 8 scale levels.</p>

        </PageSection>

        <PageSection>
            <h2 v-if="language=='ZH'" class="fade-up-enter">一次成功的多部门合作，离不开好的沟通和对用户足够的了解</h2>
            <h2 v-else-if="language=='EN'" class="fade-up-enter">Successful cross-department collaboration relies on effective communication and a thorough understanding of users</h2>

            <p v-if="language=='ZH'" class="fade-up-enter"><strong>良好文档习惯进行异步审查的关键。</strong> 跨时区协作通常依赖于异步通信，迫使利益相关者独立审查设计并提供反馈。产品经理的详细规范和持续的信息同步有助于团队无缝协作。作为设计师，我们也应该提供清晰、详细的文档，例如设计的背景、基本思路和交互的具体细节，以引导审阅者理解和回应。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter"><strong>Good documentation habits for successful asynchronous reviews. </strong>Cross-time zone collaboration often relies on asynchronous communication, urging stakeholders to review designs independently and give feedback. PM's detailed spec and continuous information synchronizing, helped the team collaborate seamlessly. We as the designers, should also present designs with clear, detailed documentation, such as the design's context, underlying thought process, and specifics of the interaction, to guide reviewers' understanding and responses
            </p>

            <p v-if="language=='ZH'" class="fade-up-enter">在设计这个核心组件的时候，我们在众多选项中难以选择最合适的设计。通过用户研究员提供的见解以及团队内持续的耐心讨论，我们最终从众多选项中交付了一个合适的设计。对于用户的理解使我们建立了讨论的基础。理解用户是如此重要，以至于我们渴望更深入地了解我们的用户，即使是通过一些快速测试，比如 A/B 测试、走廊调查等。<strong>更重要的是，不是问用户他们更喜欢哪一个，而是要了解他们的思维方式和背后的思考逻辑</strong></p>
            <p v-else-if="language=='EN'" class="fade-up-enter">When designing this core component, we found it challenging to choose the most suitable design among numerous options. With insights provided by user researchers and ongoing patient discussions within the team, we eventually delivered an appropriate design from the myriad of choices. Understanding users formed the foundation for our discussions. The importance of understanding users is such that we eagerly seek a deeper understanding, even through quick tests like A/B tests, corridor surveys, and more. <strong>What's more important is not asking users which one they prefer but understanding their mindset and the logic behind their thinking.</strong>
            </p>

        </PageSection>
        
    </PageContentContainer>
</template>

<script>
    export default {
        name: "Project8",
        data(){
            return{
            }
        },
        props:[
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