---
title: 使用 JavaScript 原生 Intl.NumberFormat 輕鬆實現數字格式化和貨幣標示
description: 在前端開發中，數字格式化和貨幣標示是常見的需求。過去通常需要借助第三方函式庫或自行編寫程式碼來處理，現在 JavaScript 提供了原生的 Intl.NumberFormat 物件，讓數字格式化和貨幣標示變得更加方便。本文介紹了 Intl.NumberFormat 的使用方式，包括 locales 和 options 參數的設置，以及如何使用 format 方法獲得格式化後的結果。
pubDate: 2024-05-08 21:47
categories: ['Front-end']
---

在前端開發中，數字格式化和貨幣標示是非常常見的需求。以前我們通常需要借助第三方函式庫或自己編寫程式碼來標示貨幣規格。現在 JavaScript 提供了原生的 `Intl.NumberFormat` 物件，讓數字格式化和貨幣標示變得更方便。

`Intl.NumberFormat` 是 ECMAScript 國際化 API 的一部分，它提供了數字格式化功能，可以根據指定的語言環境和選項，將數字轉換為符合在地地區慣例的格式。

以下是使用 `Intl.NumberFormat` 的一些參數：

1. `locales`：指定語言環境，可以是一個字串或字串陣列。例如，`'zh-TW'` 表示繁體中文（台灣），`'ja-JP'` 表示日語（日本）。
2. `options`：一個選項物件，用於自定義數字格式化。常用的選項包括：
    - `style`：指定格式化的樣式，可以是 `'decimal'`（預設值，普通數字）、`'currency'`（貨幣）或 `'unit'`（單位）。
    - `currency`：指定貨幣代碼，例如 `'TWD'` 表示新台幣，`'JPY'` 表示日圓。
    - `unit`：指定單位，例如 `'gram'`、`'kilogram'`、`'kilometer-per-hour'` 等。
    - `minimumFractionDigits`：指定最小的小數位數。例如，設置為 `0` 時，就不會顯示小數部分。

當我們建立一個 `Intl.NumberFormat` 的實例時，可以傳入 `locales` 和 `options` 參數來設置數字格式化的行為。然後，通過 `format` 方法，並傳入要格式化的數字，就可以得到格式化後的字串結果。

```javascript 
//example 01
console.log(
  new Intl.NumberFormat('ja-JP', { 
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0
  }).format(123457))
// NT$123,457

// example 02
console.log(
  new Intl. NumberFormat('pt-PT', {
      style: 'unit',
      unit: 'kilometer-per-hour'
  }).format(50))
// 50 km/h
```