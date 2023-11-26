<template>
        <PageContentContainer>
            <PageInfo :title="this.title" :category="this.category" :period="this.period" :skills="this.skills" :teams="this.teams"></PageInfo>
        <PageSection>
            <div>this project is under constration</div>
        </PageSection>
    </PageContentContainer>
</template>

<script>

    export default {
        name: "Project9",
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