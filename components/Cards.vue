<script setup lang="ts">
const cards = [
  {
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "Sports Cars are Just Not Worth it",
    author: "Laith Harb",
  },
  {
    img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "How to Survive in the Desert",
    author: "Joe Doe",
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "Why Shoes are Turning More Red",
    author: "Donald Brown",
  },
  {
    img: "https://images.unsplash.com/photo-1520763185298-1b434c919102?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "People are Eating this Deadly Flower",
    author: "Mike Anderson",
  },
  {
    img: "https://images.unsplash.com/photo-1559480671-12ceff3e511d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a29iZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "How to get the Mamba Mentality",
    author: "Kobe Bean Bryant",
  },
  {
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3570&q=80",
    title: "Worst Concert Ever",
    author: "Gavin Scott",
  },
];

const { isDarkMode } = useToggleMode();
</script>

<template>
  <div :class="{ 'dark': isDarkMode }" class="container">
    <h3>Reading List</h3>
    <div class="cards-container">
      <Card v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
  </div>
</template>

<style scoped>
.dark.container {
  color: #fff;
  background: #333;
}

.cards-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px;
  max-width: 1200px;
  margin: auto;
}

h3 {
  font-size: 25px;
}
</style>
