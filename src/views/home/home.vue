<script setup>
import { ref } from 'vue';

const typeList = ref([
    {
        type: "BTC",
        price: "22003.1",
        parcent: "0.12",
        price_cny: "126462",
        up:0
    },
    {
        type: "ETH",
        price: "22003.1",
        parcent: "0.12",
        price_cny: "126462",
        up:1
    },
    {
        type: "SOL",
        price: "22003.1",
        parcent: "0.12",
        price_cny: "126462",
        up:1
    },
]);

const artList = ref([
    {
        img: "http://localhost:5173/350.jpg",
        title: "标题",
        content: "这是文章内容"
    },
    {
        img: "http://localhost:5173/350.jpg",
        title: "标题",
        content: "这是文章内容"
    },
    {
        img: "http://localhost:5173/350.jpg",
        title: "标题",
        content: "这是文章内容"
    },
    {
        img: "http://localhost:5173/350.jpg",
        title: "标题",
        content: "这是文章内容"
    }
])
</script>

<template>
    <div class="home">
        <div class="header">
            <span>HDY Mining</span>
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
        <div class="notice">
            <van-notice-bar left-icon="volume-o" color="#f0f5f9" background="#0F0B3B"
                text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。" />
        </div>
        <div class="list">
            <div>
                <img src="../../assets/img/icons8-充值付款-48.png" alt="">
                <span>充值</span>
            </div>
            <div>
                <img src="../../assets/img/icons8-信用卡提现-48.png" alt="">
                <span>提现</span>
            </div>
            <div>
                <img src="../../assets/img/icons8-投资-48.png" alt="">
                <span>投资</span>
            </div>
            <div>
                <img src="../../assets/img/icons8-视频-48.png" alt="">
                <span>矿场实拍</span>
            </div>
        </div>
        <div class="product">
            <div v-for="(item, index) in typeList" :key="index">
                <span :class="item.up==1?'up':'down'">{{ item.type }}/USDT</span>
                <span class="price" :class="item.up==1?'up':'down'">{{ item.price }}</span>
                <span :class="item.up==1?'up':'down'">{{ item.parcent }}%</span>
                <span :class="item.up==1?'up':'down'">≈ {{ item.price_cny }} CNY</span>
            </div>
        </div>
        <div class="news">
            <div class="top">
                <span></span>
                <p>新闻资讯</p>
            </div>
            <div class="box">
                <div class="per" v-for="(item, index) in artList" :key="index">
                    <img :src="item.img" alt="">
                    <div>
                        <span>{{ item.title }}</span>
                        <p>{{ item.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    width: auto;
    height: auto;

    .header {
        padding: 15px;
        text-align: center;

        span {
            font-weight: 600;
            color: rgba($color: #ffffff, $alpha: 0.8);
        }
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

    .list {
        width: auto;
        height: 80px;
        padding: 0px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            color: rgba($color: #ffffff, $alpha: 0.9);

            img {
                width: 40px;
                height: 40px;
            }
        }
    }

    .product {
        width: auto;
        padding: 0px 15px;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;
            font-weight: 600;
            color: rgba($color: #ffffff, $alpha: 0.8);

            span {
                margin: 2px 0px;
            }
            .up{
                color: #00b8a9;
            }
            .down{
                color: #e84545;
            }
        }
    }

    .news {
        width: auto;
        height: auto;
        padding: 15px 15px 60px 15px;
        margin-top: 15px;

        .top {
            width: auto;
            height: 25px;
            display: flex;
            align-items: center;

            span {
                display: block;
                background: linear-gradient(to bottom, #ff2e63, #ffe2e2);
                width: 6px;
                height: 25px;
                margin-right: 10px;
            }

            p {
                font-size: 18px;
                font-weight: 600;
            }
        }

    }

    .box {
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        .per {
            width: 100%;
            height: 80px;
            margin: 10px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid gray;
            box-sizing: border-box;
            padding-bottom: 5px;

            img {
                width: 120px;
                height: 60px;
            }

            div {
                width: 60%;
                height: 80px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                span {
                    font-weight: 600;
                    font-size: 15px;
                    color: rgba($color: #ffffff, $alpha: 0.9);
                }

                p {
                    color: rgba($color: #ffffff, $alpha: 0.7);
                }
            }
        }
    }
}</style>