<template>
    <div class="qr-code-cover">
        <img src="../assets/brand/qr-code.jpeg" alt="" class="qr-code">
        <p v-if="language=='ZH'">桌面端页面正在准备中，请通过手机扫描二维码浏览</p>
        <p v-else-if="language=='EN'">The desktop web page is being prepared, please scan the QR code on your mobile phone to browse</p>
    </div>
</template>

<script>
    export default {
        name: "QRCodeCover",
        props:['language'],

    }
</script>

<style scoped>
    .qr-code-cover{
        background: var(--background-color);
        width: 100vw;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 95;
        color: var(--white);
    }
    .qr-code{
        width: 8rem;
        height: 8rem;
        left: calc(50% - 4rem);
        top: calc(50% - 8rem);
        position: absolute;
    }
    .qr-code-cover p {
        width: 24rem;
        position: absolute;
        top: calc(50% + 4rem);
        left: calc(50% - 12rem);
        text-align: center;
    }

    @media (max-width: 767px) {
        .qr-code-cover{
            display: none;
        }
    }
</style>