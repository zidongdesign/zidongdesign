<template>
    <div class="footer">
        <h1 v-if="this.language==='EN'"><a href="mailto:zidong.chen1996@gmail.com">CONTACT ME</a></h1>
        <h1 v-else-if="this.language==='ZH'"><a href="mailto:zidong.chen1996@gmail.com">联系我</a></h1>
        <span class='copyright' v-if="this.language==='EN'">Copyright © 2022 ZIDONG CHEN. All rights reserved.</span>
        <span class='copyright' v-else-if="this.language==='ZH'">版權所有© 2022 陈子东</span>

    </div>
</template>

<script>
    export default {
        name: "Footer",
        props:[
            'language',
        ]
    }
</script>

<style scoped>
    .footer{
        position: relative;
        width: 100%;
        height: 48rem;
        background-color: var(--white);
        z-index: 96;
    }
    h1{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
    }
    .copyright{
        position: absolute;
        left: 50%;
        bottom: 2rem;
        transform: translate(-50%);
        width: 100%;
        text-align: center;
        font-size: 0.5rem;
    }
    a{
        color: var(--black);
    }
</style>