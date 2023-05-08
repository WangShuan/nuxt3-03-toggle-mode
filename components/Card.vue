<script setup lang="ts">
interface CardProps {
  card: {
    img: string;
    title: string;
    author: string;
  };
}

const props = defineProps<CardProps>();
const { isDarkMode } = useToggleMode();
</script>

<template>
  <div :class="{ 'dark': isDarkMode }" class="card">
    <img :src="card.img" alt="" />
    <div class="content">
      <span>{{ card.author }}</span>
      <h3>{{ card.title }}</h3>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  width: 100%;
  max-width: 320px;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #eee;
}

.dark .card {
  background: #000;
}

.card:hover img {
  transform: scale(1.2) translateY(-15px);
  transition: all .3s;
}

img {
  width: 100%;
  max-height: 200px;
  overflow: hidden;
}

.content {
  padding: 10px;
}

h3 {
  line-height: 1.5;
}

span {
  margin-bottom: 10px;
  display: block;
  text-decoration: underline;
}
</style>
