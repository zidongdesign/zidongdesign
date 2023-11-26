<template>
    <div class="info" style="display: flex;flex-direction: column;gap: 4rem;width: 100%;">
        <h1 class="title fade-up-enter" style="width: 100%;">{{this.title}}</h1>
        <div class="h-stack" style="width: 100%;flex-wrap: wrap;row-gap: 2rem; column-gap: 4rem;">

            <div class="h-stack" style="flex:1 0 0;lex-wrap: wrap;row-gap: 2rem; column-gap: 4rem;min-width: fit-content;">
                <div class="v-stack" style="flex: 1;min-width: fit-content;gap: 0rem;">
                    <p class="heading fade-up-enter"> skills </p>
                    <p class="value fade-up-enter">{{this.skills}}</p>
                </div>
                <div class="v-stack" style="flex: 1;min-width: fit-content;gap: 0rem;">
                    <p class="heading fade-up-enter"> teams </p>
                    <p class="value fade-up-enter">{{this.teams}}</p>
                </div>
            </div>
            
            <div class="h-stack" style="flex:1 0 0;flex-wrap: wrap;row-gap: 2rem; column-gap: 4rem;min-width: fit-content;">
                <div class="v-stack" style="flex: 1;min-width: fit-content;gap: 0rem;">
                    <p class="heading fade-up-enter"> timeline </p>
                    <p class="value fade-up-enter">{{this.period}}</p>
                </div>
                <div class="v-stack" style="flex: 1;min-width: fit-content;gap: 0rem;">
                    <p class="heading fade-up-enter"> category </p>
                    <p class="value fade-up-enter">{{this.category}}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "PageInfo",
        props:[
            'category',
            'period',
            'skills',
            'teams',
            'title',
            'language',

        ]
    }
</script>

<style scoped>
    h1.title{
        font-size: 6rem;
        line-height: 6rem;
        text-transform:uppercase;
    }
    @media only screen and (max-width: 480px) {
        h1.title{
            font-size: 4rem;
            line-height: 4rem;
            text-transform:uppercase;
        }
    }

    p{
        white-space: pre-line;
        line-height: 2;
    }
    p.heading {
        opacity: 0.5;
    }
</style>