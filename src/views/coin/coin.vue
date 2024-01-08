<script setup>
import { ref } from 'vue';

const coinList = ref([
    {
        name: "ETH小额混币",
        cycle: "1",
        profit: "0.5"
    },
    {
        name: "BTC小额混币",
        cycle: "1",
        profit: "0.5"
    },
    {
        name: "ETH大额混币",
        cycle: "1",
        profit: "0.5"
    },
    {
        name: "ETH大额混币",
        cycle: "1",
        profit: "0.5"
    },
    {
        name: "USDT大额混币",
        cycle: "1",
        profit: "0.5"
    },
])
</script>

<template>
    <div class="coin">
        <div class="header">
            <span>混币</span>
        </div>
        <div class="search">
            <span class="material-symbols-outlined search_icon">
                search
            </span>
            <input type="text" placeholder="请输入混币名称">
        </div>
        <div class="per" v-for="(item, index) in coinList" :key="index">
            <div>
                <span class="name">{{ item.name }}</span>
            </div>
            <div>
                <span>周期</span>
                <span class="span1">{{ item.cycle }}天</span>
            </div>
            <div>
                <span>收益</span>
                <span class="span1">{{ item.profit }}%</span>
            </div>
            <button>开始混币</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.coin {
    width: auto;
    height: auto;
    padding: 15px 15px 60px 15px;
    background: #100C3B;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    .header{
        width: auto;
        height: auto;
        text-align: center;
        padding-bottom: 10px;
        font-weight: 600;
    }
    .search{
        width: 100%;
        height: auto;
        overflow: hidden;
        position: relative;
        input{
            width: 100%;
            height: 30px;
            padding-left: 15px;
            border: 0;
            outline: none;
            background:  rgba($color: #112d4e, $alpha: 0.5);
            color: rgba($color: #FFFFFF, $alpha: 0.6);
            border-radius: 2px;
        }
        .search_icon{
            position: absolute;
            color: rgba($color: #FFFFFF, $alpha: 0.6);
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .per {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 15px;
        box-sizing: border-box;
        background: rgba($color: #112d4e, $alpha: 0.5);
        border-radius: 5px;
        margin-top: 20px;

        div {
            display: flex;
            justify-content: space-between;
            margin: 5px;

            .name {
                font-weight: 600;
                color: rgba($color: #FFFFFF, $alpha: 0.9);
            }

            span {
                color: rgba($color: #FFFFFF, $alpha: 0.6);
            }

            .span1 {
                font-weight: 600;
                color: rgba($color: #00b8a9, $alpha: 0.9);
            }
        }

        button {
            margin: 5px;
            height: 30px;
            background: #ea5455;
            border: 0;
            box-shadow: 2px 2px 2px 2px #ea5455;
        }
    }
}</style>