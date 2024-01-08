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
    background:  rgba($color: #112d4e, $alpha: 0.5);
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
      }    }

  }
}</style>