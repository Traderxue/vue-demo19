<template>
    <div class="scroll-container" ref="scrollContainer">
      <div v-for="(line, index) in lines" :key="index" class="scroll-line">
        {{ line }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const lines = ref([
    "这是第一行文本。",
    "这是第二行文本。",
    "这是第三行文本。",
    "这是第一行文本。",
    "这是第二行文本。",
    "这是第三行文本。",
    "这是第一行文本。",
    "这是第二行文本。",
    "这是第三行文本。",
    // 添加更多行...
  ]);
  
  const scrollContainer = ref(null);
  const scrollSpeed = 30;
  
  onMounted(() => {
    setInterval(() => {
      if (scrollContainer.value) {
        const firstLine = scrollContainer.value.querySelector(".scroll-line");
  
        if (firstLine) {
          const lineHeight = firstLine.offsetHeight;
          scrollContainer.value.scrollTop += lineHeight;
  
          if (scrollContainer.value.scrollTop >= scrollContainer.value.scrollHeight) {
            scrollContainer.value.scrollTop = 0;
          }
        }
      }
    }, 100000 / scrollSpeed);
  });
  </script>
  
  <style scoped>
  .scroll-container {
    height: 120px;
    overflow: hidden;
    border: 1px solid #ccc;
  }
  
  .scroll-line {
    line-height: 30px;
  }
  </style>
  