<script setup>
import { ref } from 'vue';

const active = ref(0)
</script>

<template>
    <div class="index">
        <RouterView />
        <van-tabbar v-model="active" route active-color="#ff2e63">
            <van-tabbar-item to="/home">
                <span class="material-symbols-outlined">
                    home
                </span><br><span>首页</span></van-tabbar-item>
            <van-tabbar-item to="/info">
                <span class="material-symbols-outlined">
                    wysiwyg
                </span><br><span>资讯</span>
            </van-tabbar-item>
            <van-tabbar-item to="/coin">
                <span class="material-symbols-outlined">
                    token
                </span><br><span>混币</span></van-tabbar-item>
            <van-tabbar-item to="/mine">
                <span class="material-symbols-outlined">
                    person
                </span><br><span>我的</span></van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style scoped lang="scss">
.van-tabbar{
    background: #0F0B3B;
}
.van-tabbar-item{
    background: #0F0B3B;
}
</style>