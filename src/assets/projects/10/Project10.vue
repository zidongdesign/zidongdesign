<template>
    <PageContentContainer>
        <PageInfo v-if="language=='ZH'" :title="'七是一个充满神秘的数字'" :category="this.category" :period="2022" :skills="this.skills" :teams="this.teams"></PageInfo>
        <PageInfo v-else-if="language=='EN'" :title="'Seven is a number full of mystery'" :category="this.category" :period="2022" :skills="this.skills" :teams="this.teams"></PageInfo>
        <PageSection>
            <h2 class="fade-up-enter">
                Scan the code by Wechat to have a try
            </h2 >
            <img :src="require('@/assets/projects/10/qrcode.png')" alt="" style="width: 320px;margin: 0 auto;" class="fade-up-enter">
        </PageSection>
        <PageSection>
            <h2 class="fade-up-enter">
                Behind the Scenes
            </h2>
            <p v-if="language=='ZH'" class="fade-up-enter">数字7自古以来就被赋予了神秘的色彩，从童话故事中的7个小矮人、民间传说的7个葫芦娃、神话中的7仙女，到音乐领域的七个基本音符，似乎7这个数字总能构建出完美和和谐的意象。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">The number 7 has been shrouded in mystique since ancient times. From the seven dwarfs in fairy tales and the seven Calabash Brothers in folklore to the seven fairies in myths and the seven basic notes in music, it seems that the number 7 always manages to create an image of perfection and harmony.</p>
            <p v-if="language=='ZH'" class="fade-up-enter">受此启发，我设计了一个富有趣味的小游戏——玩家需要通过累加数字直至达到7，完成消除并为新数字腾出空间。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Inspired by this, I have designed an intriguing little game where players need to add numbers until they reach 7, complete the elimination, and make room for new numbers.</p>
            <img :src="require('@/assets/projects/10/demo1.gif')" alt="" class="fade-up-enter" style="width: 320px;margin: 0 auto">
            <p v-if="language=='ZH'" class="fade-up-enter">当累积的数字超过7时，格子就会被锁定，用户需要在尽量不让格子锁住的情况下获得更高的分数</p>
            <p v-else-if="language=='EN'" class="fade-up-enter" style="margin: 0 auto;">When the cumulative number exceeds 7, the grid will be locked, and players need to achieve a higher score while minimizing the number of grids getting locked.</p>
            <img :src="require('@/assets/projects/10/demo2.gif')" alt="" class="fade-up-enter" style="width: 320px;margin: 0 auto">
            <p v-if="language=='ZH'" class="fade-up-enter">游戏完成后，我迫不及待地让身边的朋友试玩并收集他们的意见，我发现游戏的概念还不是很通俗易懂，为此我设计了新手指引</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">After completing the game, I was eager to have my friends try it out and collect their feedback. I realized that the concept of the game was not very easy to understand, so I designed a tutorial for beginners.</p>
            <img :src="require('@/assets/projects/10/demo3.gif')" alt="" class="fade-up-enter" style="width: 320px;margin: 0 auto">
            <p v-if="language=='ZH'" class="fade-up-enter">另外一个问题是，数字出现是随机的，有时候刷出来的数字并不能被填到任何一个格子里，这使得用户觉得随机性太高，于是我设计了刷新机制，用户可以刷新数字，并且可以通过分享增加一次刷新次数</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Another problem was that the appearance of the numbers was random, and sometimes the new number couldn't fit into any of the grid spaces. This made users feel that the randomness was too much, so I designed a refresh button that allows users to refresh the numbers, and they can get an additional refresh chance by sharing.</p>
            <img :src="require('@/assets/projects/10/demo4.gif')" alt="" class="fade-up-enter" style="width: 320px;margin: 0 auto">
        </PageSection>

    </PageContentContainer>
</template>

<script>    
    export default {
    name: "Project10",
    data() {
        return {};
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