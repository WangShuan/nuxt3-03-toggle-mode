<script setup lang="ts">
const { isDarkMode, toggleMode } = useToggleMode();
</script>

<template>
  <nav :class="{ 'dark': isDarkMode }">
    <h1>LOGO</h1>
    <label class="switch">
      <input v-model="isDarkMode" @click="toggleMode" type="checkbox" id="toggle">
      <span class="slider round"></span>
    </label>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 3px #eee;
  padding: 10px 20px;
}

.switch {
  position: relative;
  display: block;
  width: 60px;
  height: 34px;
  margin: 20px 0;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .2s;
  border-radius: 5px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .2s;
  border-radius: 5px;
}

input:checked+.slider {
  background-color: #A9A9A9;
}

input:checked+.slider:before {
  transform: translateX(26px);
}
</style>
