<script setup>
import { ref } from 'vue';

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

const videList = ref([
  {
    url:"https://www.rhy.zone/static/web/video/rhy22.mp4"
  },
  {
    url:"https://www.rhy.zone/static/web/video/rhy21.mp4"
  },
  {
    url:"https://www.rhy.zone/static/web/video/rhy16.mp4"
  },
  {
    url:"https://www.rhy.zone/static/web/video/rhy20.mp4"
  }
])
</script>

<template>
  <div class="info">
    <div class="header">
      <span>矿场资讯</span>
    </div>
    <div class="content">
      <div class="info">
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
      <div class="photo">
        <div class="top">
          <span></span>
          <p>矿场实拍</p>
        </div>
        <div class="video" v-for="(item,index) in videList" :key="index">
          <div >
            <video width="360" height="140" controls>
              <!-- video文件的路径 -->
              <source :src="item.url" type="video/mp4">
              <!-- 提供其他格式的备用文件，以便在不同浏览器中兼容 -->
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  width: auto;
  height: auto;

  .header {
    padding: 15px;
    text-align: center;

    span {
      font-weight: 600;
      color: rgba($color: #ffffff, $alpha: 0.9);
    }
  }

  .content {
    width: auto;
    height: auto;
    padding: 15px 15px 70px 15px;

    .top {
      display: flex;
      align-items: center;
      width: auto;
      height: 25px;

      span {
        display: block;
        width: 5px;
        height: 25px;
        background: linear-gradient(to bottom, #ff2e63, #ffe2e2);
        margin-right: 10px;
      }

      p {
        font-size: 15px;
        font-weight: 600;
        color: rgba($color: #ffffff, $alpha: 0.9);
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

    .info {
      width: auto;
      height: auto;
    }

    .photo {
      margin-top: 15px;
      .video{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        margin-top: 15px;
      }
    }
  }
}
</style>