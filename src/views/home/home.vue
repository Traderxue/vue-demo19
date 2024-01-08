<template>
    <div class="home">
        <div class="header">
            <span></span><span>首页</span><span class="material-symbols-outlined">
                sms
            </span>
        </div>
        <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <img src="http://localhost:5173/banner1.png" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="http://localhost:5173/banner2.png" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="http://localhost:5173/banner3.png" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="notice" >
            <van-notice-bar left-icon="volume-o" color="#ff2e63" background="#FFF" text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。" />
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.home {
    width: auto;
    height: auto;

    .header {
        padding: 15px;
        display: flex;
        justify-content: space-between;
    }

    .banner {
        width: auto;
        height: 150px;
        padding: 0px 15px;
        border-radius: 3px;
        img {
            width: 100%;
            height: 150px;
            border-radius: 3px;
        }
    }
}
</style>