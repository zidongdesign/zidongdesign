<template>
    <div class="quote fade-up-enter">
        <div class="h-stack" style="align-items: center;gap: 0.5rem;">
            <img v-if="avatar!=null" :src="this.avatar" alt="" class="avatar">
            <div v-else-if="avatar==null" class="avatar" style="display: flex; align-items: center;justify-content: center;color: var(--foreground-light-1);font-size: 1rem;border: 1px solid var(--foreground-light-4);padding-bottom: 2px;box-sizing: border-box;">{{firstCharacter}}</div>
            <p class="name">{{ name }}</p>
        </div>
        
        <p><slot></slot></p>

    </div>
</template>

<script>
    export default {
        name: "Quote",
        props:[
            'name',
            'avatar'
        ],
        computed:{
            firstCharacter: function() {
                if (this.name && this.name.length > 0) {
                    // 使用charAt或者直接索引获取第一个字母
                    return this.name.charAt(0).toUpperCase();
                    // 或者使用索引： return str[0];
                }
                // 如果字符串为空，返回空字符串或者其他适当的值
                return '';
            }
        }
    }
</script>

<style scoped>
    .quote{
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        color: var(--foreground-light-1);
        border-left: 2px var(--foreground-light-4) solid ;
        padding: 0 1rem;
        min-width: 240px;
    }
    .avatar{
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
        background: var(--background-dark);
    }
</style>