# Nuxt3-project3 切換 Dark/Light Mode

原始碼：https://github.com/WangShuan/nuxt3-03-toggle-mode

## 建立與啟動 Nuxt 專案

開啟終端機，`cd` 到桌面或任何希望創建該專案的位置
執行命令： 
```shell
npx nuxi init 03-toggle-mode
```

完成後，根據提示
先 `cd` 到專案目錄 `03-toggle-mode` 中
執行命令：
```shell
npm install
```
安裝所有依賴項目
此時會發現專案目錄中**生成了 `node_modules` 資料夾**

確認您的專案已成功安裝好所有依賴後
即可執行命令：
```shell
npm run dev
```
啟動 Nuxt 應用程序。

## 專案說明

本專案要嘗試使用 composables 的方式處理 Dark/Light Mode 切換的功能

composables 被稱作“組合式函數”，它結合了 Vue3 Composition API 的特性
使你能夠以更具結構和可重用性的方式編寫 Vue 組件的邏輯

這邊簡單準備一個 template：
https://codepen.io/WangShuan/pen/YzJegRz?editors=1100

請先將 codepen 中的內容全部放置在 app.vue 檔案中
接著開始拆分成元件，按照註解中標示的內容，拆分為以下幾個部分：
`Navbar.vue`、`Post.vue`、`Cards.vue`、`Card.vue`

現在由於每個元件中都需要判斷當前的 Mode 以進行 class 的切換
假如我們有十個頁面、每個頁面都有時個元件，那從 app.vue 設定好 Mode 後就需要不斷的使用 props 進行傳遞
這樣會非常的複雜且麻煩，這時就很適合通過 composables 的方式進行全局狀態管理
步驟如下：
1. 在項目根目錄中新增資料夾 composables(該資料夾中只能用來存放 `.js` 或 `.ts` 檔案，並且檔案名稱規定必須使用 `use` 開頭，比如 `useFoo` `useMode` 等)
2. 在 composables 中新增檔案 `useToggleMode.ts`，在 `ts` 中規定要先使用 `const` 的方式聲明好 composable接著在最下方通過 `export default` 的方式匯出 composable，通常使用 const 聲明的 composable 會使用檔案名稱
3. 在 `useToggleMode.ts` 撰寫內容如下：
```typescript
const useToggleMode = () => {
  const isDarkMode = useState("darkMode", () => true); // 使用 useState 的方式創建並保存狀態

  const toggleMode = () => { // 變更狀態的函數
    isDarkMode.value = !isDarkMode.value;
  }

  return { // 匯出狀態與函數
    isDarkMode,
    toggleMode
  }
}

export default useToggleMode;
```

接著在我們建立好的四個元件中添加以下內容：
```htmlembedded
<script setup lang="ts">
const { isDarkMode } = useToggleMode(); // 從 composables 中獲取狀態來使用
</script>

<template>
  <!-- 並在每個元件中的第一個標籤中添加上 :class="{ 'dark': isDarkMode }" 以切換 class -->
  <div :class="{ 'dark': isDarkMode }">
  </div>
</template>
```

最後將 Navbar.vue 的內容更改為：
```htmlembedded
<script setup lang="ts">
const { isDarkMode, toggleMode } = useToggleMode(); // 多引入 toggleMode 函數
</script>

<template>
  <nav :class="{ 'dark': isDarkMode }">
    <h1>LOGO</h1>
    <label class="switch">
      <input 
        v-model="isDarkMode" // 設置 v-model 切換當前樣式
        @click="toggleMode" // 綁定點擊事件以進行切換狀態
        type="checkbox" id="toggle"
      />
      <span class="slider round"></span>
    </label>
  </nav>
</template>
```