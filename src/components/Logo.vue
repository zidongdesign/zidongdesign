<template>
    <div class="logo-container">
        <img class="logo" src="@/assets/brand/logo.svg" alt="">
        <p style="font-size: 12px; width: 96px;">陈子东</p>
    </div>
</template>

<script>
    export default {
        name: "logo"
    }
</script>

<style scoped>
    .logo-container{
        position: fixed;
        width: fit-content;
        height: 2rem;
        left: 2rem;
        top: 2rem;
        transform: translate(-0%,-0%);
        font-size: 0;
        margin-bottom: 0;
        mix-blend-mode:difference;
        z-index: 97;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    .logo{
        width: 2rem;
        height: 2rem;
    }
</style>