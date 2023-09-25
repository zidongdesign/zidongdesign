<template>
    <div class="logo-container">
        <img class="logo" src="@/assets/brand/logo.svg" alt="">
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
        width: 2rem;
        height: 2rem;
        left: 2rem;
        top: 2rem;
        transform: translate(-0%,-0%);
        font-size: 0;
        margin-bottom: 0;
        mix-blend-mode:difference;
        z-index: 97;
    }
    .logo{
        width: 100%;
        height: 100%;

    }
</style>