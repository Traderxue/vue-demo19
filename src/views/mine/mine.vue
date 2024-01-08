<script setup>
import { ref } from 'vue';

const navList = ref([
  {
    path: "/security",
    title: "安全中心",
    icon: "verified_user"
  },
  {
    path: "/security",
    title: "安全中心",
    icon: "verified_user"
  },
  {
    path: "/security",
    title: "安全中心",
    icon: "verified_user"
  },
  {
    path: "/security",
    title: "安全中心",
    icon: "verified_user"
  },
])
</script>

<template>
  <div class="mine">
    <div class="header">
      <span></span>
      <span>个人中心</span>
      <span class="material-symbols-outlined">
        settings
      </span>
    </div>
    <div class="top">
      <img src="https://avatars.githubusercontent.com/u/128983356" alt="">
      <div class="nickname">
        <span>昵称:</span><span>xxxx</span>
      </div>
      <div>
        <span>余额:</span><span>1000.00</span>
      </div>
      <div class="profit">
        <div>
          <span>余额</span>
          <span>今日收益</span>
          <span>昨日收益</span>
        </div>
        <div style="font-weight: 600;">
          <span style="color: #00b8a9;">1222</span>
          <span style="color:#e84545;">222</span>
          <span style="color: #3490de;">12</span>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="per" v-for="(item, index) in navList" :key="index">
        <div>
          <span class="material-symbols-outlined">
            {{ item.icon }}
          </span>
          <span>{{ item.title }}</span>
        </div>
        <span class="material-symbols-outlined">
          arrow_forward_ios
        </span>
      </div>
      <button>退出登录</button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.mine {
  width: auto;
  height: auto;
  padding: 15px 15px 60px 15px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba($color: #FFFFFF, $alpha: 0.9);
    font-weight: 600;
  }

  .top {
    margin: 20px 0px;
    width: auto;
    height: 180px;
    background: rgba($color: #112d4e, $alpha: 0.5);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-bottom: 10px;
    }

    .nickname {
      margin-bottom: 5px;
    }

    .profit {
      margin-top: 10px;
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-items: center;

      span {
        width: 33%;
        text-align: center;
        margin-top: 5px;
      }

      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  .box {
    margin-top: 20px;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background: rgba($color: #112d4e, $alpha: 0.5);
    color: rgba($color: #FFFFFF, $alpha: 0.9);

    .per {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 10px 0px;
      border-bottom: 1px solid rgba($color: #FFFFFF, $alpha: 0.9);
      padding-bottom: 15px;

      div {
        display: flex;
        justify-content: space-around;
        align-items: center;

        span {
          margin-right: 5px;
        }
      }
    }
    button{
      width: 100%;
      height: 38px;
      margin: 15px 0px;
      border: 0;
      border-radius: 20px;
      background: #3490de;
      color: rgba($color: #FFFFFF, $alpha: 0.9);
      box-shadow: 2px 2px 2px 2px #3490de;
    }
  }
}
</style>