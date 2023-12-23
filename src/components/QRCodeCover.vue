<template>
    <div class="qr-code-cover">
        <img src="../assets/brand/qr-code.png" alt="" class="qr-code">
        <p v-if="language=='ZH'" >Oops... 桌面宽度的版本还在准备中，请扫描二维码在手机上浏览，或者<a @click="openNewWindow" class="interactive-l">打开一个特定尺寸的窗口</a></p>
        <p v-else-if="language=='EN'">Oops... The desktop width version is under constration, scan the QR code to browse on your phone, or <a @click="openNewWindow" class="interactive-l">open a new window of a specific size</a></p>
    </div>
</template>

<script>
    export default {
        name: "QRCodeCover",
        props:['language'],
        methods:{
            openNewWindow(){
                window.open('index.html', 'newwindow', 'height=800, width=480, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no') 
            }
        }

    }
</script>

<style scoped>
    .qr-code-cover{
        background: var(--background-dark);
        width: 100vw;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 98;
        color: var(--foreground-light-1);
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
    .qr-code-cover a{
        width: fit-content;
        height: fit-content;
        z-index: 96;
        padding: 0.5rem;
        margin: 1rem;
        border: 1px var(--foreground-light-1) solid;
        cursor: default;
    }

    @media (max-width:var(--bk-m)) {
        .qr-code-cover{
            display: none;
        }
    }
</style>