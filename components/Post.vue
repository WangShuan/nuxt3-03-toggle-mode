<script setup lang="ts">
const { isDarkMode } = useToggleMode();
</script>

<template>
  <div :class="{ 'dark': isDarkMode }" class="container">
    <div class="text-container">
      <img src="https://fakeimg.pl/900x600/" alt="">
      <p>Dark mode has become an increasingly popular feature among mobile and desktop applications in recent years, and
        for
        good reason. For those who spend time working or browsing on their devices late into the night, dark mode can be a
        lifesaver.</p>
      <p>The bright white background of a traditional display can be harsh on the eyes in low-light environments, causing
        eye
        strain and fatigue. Dark mode, on the other hand, uses a black or dark-colored background with lighter text and
        interface elements, which can be much easier on the eyes.</p>
      <p>In fact, using dark mode at night can even improve your sleep quality. Exposure to bright light at night can
        suppress
        the production of the hormone melatonin, which is important for regulating sleep. By using dark mode, you can
        reduce
        the amount of blue light emitted by your device, which in turn can help promote better sleep.</p>
    </div>
  </div>
</template>

<style scoped>
.dark {
  color: #fff;
  background-color: #000;
}

p {
  margin: 15px auto;
}

.text-container {
  max-width: 1200px;
  margin: auto;
  padding: 30px;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
