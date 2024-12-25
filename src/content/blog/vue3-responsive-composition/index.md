---
title: Vue3 響應式依賴追蹤機制 
description: Vue 3 引入了全新的響應式系統，今天我們來聊聊關於這當中的依賴追蹤機制。
date: 2024-11-29
category: ['Front-end']
tags: ["Vue3"]
---

```vue
<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 1 })

function handleClick() {
  state.count++
}
</script>

<template>
  <button @click="handleClick">button</button>
  <p>{{ state.count }}</p>
</template>
```

我們以上面的範例來說明 Vue 3 的響應式依賴追蹤機制。
## 頁面建立流程
當我們點擊網址，進入一個由 Vue 3 所建立的頁面時，渲染的過程是如何發生的呢？
頁面渲染是透過 Component Render Function（通常是 `<template>`）來生成一個虛擬 DOM（Virtual DOM），並最終渲染成真實的 DOM。

---

![vue-responsive-getter](/blog/vue-responsive-getter.png)

## 建立步驟

- 當頁面初次載入或元件掛載時，Vue 會執行 render 函式，並在渲染過程中讀取 `state.count`，這時候 Vue 的響應式系統會自動將 `state.count` 註冊為 effect 函式的依賴。
- 在執行過程中，Effect fn 會訪問狀態物件中的 count，這時候如果該物件是響應式的（即被 Proxy 包裝），會觸發對 count 屬性的 getter。

![vue-responsive-collection](/blog/vue-responsive-collection.png)

由於使用了 Proxy，getter 會通知 Vue 系統，並回頭尋找執行的 effect。根據屬性之間的依賴關係，Vue 會複製出一個新的物件，
並將這個 effect 映射到一個陣列中，這樣便形成了資料與視圖之間的關聯。

完成依賴映射後，渲染過程會繼續進行，最終將更新後的虛擬 DOM 渲染成真實的 DOM，顯示到頁面上。

## 頁面更新流程
當頁面已經渲染並顯示後，使用者與頁面的互動會觸發頁面更新。這些更新的過程主要是由響應式系統管理的。

![vue-responsive-update](/blog/vue-responsive-update.png)

### 更新步驟
1. 當使用者的操作（如點擊、輸入等）觸發某個屬性的變動時，會進行 setter 操作。這會改變響應式物件中的數據。
2. 當 setter 被觸發時，Vue 會搜尋到該屬性所依賴的所有 effect。這些依賴關係會通知 Vue 執行更新操作。
3. Vue 會重新執行 Effect fn，並再次觸發該屬性的 getter，更新響應式狀態。
4. 依賴的映射完成後，頁面會重新渲染（參照建立步驟），顯示出最新的數據和視圖。
