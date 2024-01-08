<template>
    <div class="box">
        <transition name="roll">
            <div class="inner" :key="index">
                {{ list[index] }}
            </div>
        </transition>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const list = reactive(['轮播文字11111111', '轮播文字222222222222', '轮播文字33333333333333333333'])
const index = ref(0)
setInterval(() => (index.value === list.length - 1 ? (index.value = 0) : index.value++), 2000)
</script>

<style lang="scss" scoped>
.box {
    position: relative;
    height: 50px;
    background-image: linear-gradient(90deg, rgba(13, 0, 36, 1) 0%, rgba(46, 59, 202, 0.8) 100%);
    font-size: 16px;
    color: #fff;
    padding: 0 10px;

    .inner {
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
    }
}

.roll-enter-active,
.roll-leave-active {
    transition: all 0.4s ease-in-out;
}

.roll-enter-from {
    transform: translateY(100%);
}

.roll-leave-to {
    transform: translateY(-100%);
}</style>