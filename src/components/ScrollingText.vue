<template>
    <div class="scroll-container">
      <div v-for="(line, index) in lines" :key="index" class="scroll-line">
        {{ line }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lines: [
          "这是第一行文本。",
          "这是第二行文本。",
          "这是第三行文本。",
          // 添加更多行...
        ],
        scrollSpeed: 30, // 滚动速度（每秒像素数）
      };
    },
    mounted() {
      this.startScroll();
    },
    methods: {
      startScroll() {
        setInterval(() => {
          const container = this.$el.querySelector(".scroll-container");
          const firstLine = this.$el.querySelector(".scroll-line");
  
          if (container && firstLine) {
            const lineHeight = firstLine.offsetHeight;
            container.scrollTop += lineHeight;
  
            if (container.scrollTop >= container.scrollHeight) {
              container.scrollTop = 0;
            }
          }
        }, 1000 / this.scrollSpeed);
      },
    },
  };
  </script>
  
  <style>
  .scroll-container {
    height: 120px; /* 滚动容器的高度 */
    overflow: hidden;
    border: 1px solid #ccc;
  }
  
  .scroll-line {
    line-height: 30px; /* 行高 */
    transition: transform 0.5s ease-in-out; /* 可以添加过渡效果 */
  }
  </style>
  