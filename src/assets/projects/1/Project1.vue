<template>
    <PageContentContainer>
        <PageInfo :title="this.title" :category="this.category" :period="this.period" :skills="this.skills" :teams="this.teams"></PageInfo>
        <PageSection>
            <h2 class="fade-up-enter">Project No.001</h2>
            <p v-if="language=='ZH'" class="fade-up-enter">啊哈，你发现了我的 No.001 项目，这是个远古项目，古老到当我找出源文件想要翻修一下时，满屏的错误提示打消了我的念头。因此你有机会看到这个项目最原始的面目</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">Aha, you found my project No.001, which is a project so far back in time, so ancient that when I found the source file and tried to tinker with it, a screen full of error alerts dissuaded me. So here's your chance to see the project in its most pristine guise</p>
            <video controls width="100%" :poster="require('@/assets/projects/1/details1.png')" class="fade-up-enter">
                <source src="./details1.mp4"
                        type="video/mp4">
            </video>
        </PageSection>
        <PageSection>
            <h2 class="fade-up-enter">How to play?</h2>
            <p v-if="language=='ZH'" class="fade-up-enter">整个游戏的概念很简单：敌人是随机生成的，当玩家消灭一群敌人之后，他需要前往下一个地点消灭下一波敌人。</p>
            <p v-else-if="language=='EN'" class="fade-up-enter">The whole concept of the game is simple: enemies are randomly generated, and after the player destroys a group of enemies, he needs to travel to the next location to destroy the next wave of enemies.</p>
            <img :src="require('@/assets/projects/1/details2.gif')" alt="" class="fade-up-enter">
            <img :src="require('@/assets/projects/1/details3.png')" alt="" class="fade-up-enter">
            <img :src="require('@/assets/projects/1/details4.png')" alt="" class="fade-up-enter">
            <img :src="require('@/assets/projects/1/details5.png')" alt="" class="fade-up-enter">
            <div @click="playDarkness" id="playdarkness" class="interactive-l">Play Endless Darkness</div>
            <p v-if="language=='ZH'" class="" style="margin: 0 auto;">请注意：这是一个充满 Bug 的古老项目，请保持耐心...</p>
            <p v-else-if="language=='EN'" class="" style="margin: 0 auto;">Please notes: this is an ancient project full of bugs, so please be patient...</p>
        </PageSection>
    </PageContentContainer>
</template>

<script>
    export default {
        name: "Project1",
        props:[
            'category',
            'period',
            'title',
            'language',
            'skills',
            'teams'
        ],
        methods:{
            playDarkness(){
                const w = window.innerWidth;
                const h = window.innerHeight;
                const configuration = 'height=720' + h + ', width=' + w + ', toolbar=yes, menubar=yes, scrollbars=no, resizable=no, location=no, status=yes'
                window.open('./game-darkness/webGL.html', 'newwindow', configuration) 
            }
        }
    }
</script>

<style scoped>

    #playdarkness {
        padding: 1rem;
        color: var(--foreground-light-1);
        border: var(--foreground-light-1) 1px solid;
        position: relative;
        display: block;
        width: fit-content;
        font-size: 1rem;
        box-sizing: content-box;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    #playdarkness::before{
        content:"";
        display:block;
        width:2rem;
        height:2rem;
        background: url(icon-plane.png);
        background-size: contain;
    }


</style>