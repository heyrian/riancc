---
title: Webpack vs Vite：前端建置工具優缺點比較與應用場景
customSlug: webpack-vs-vite-front-end-build-tools-pros-cons-application-scenarios
tags:
  - 建置工具
  - 前端工程
  - 網頁開發
  - Webpack
  - Vite
snippet: 比較 Webpack 和 Vite 兩大前端建置工具的優缺點，包括建構速度、學習成本、打包設置精細度、生態系成熟度等，並分析其應用場景，助您選擇最適合專案需求的建置工具。
publishDate: 2024-05-02 18:23
category: Development
---

## Webpack 打包工具

- Webpack 是一個功能強大且可以自由配置的模組打包工具（module bundler）。
- 它可以將 JavaScript、CSS、圖片等等，視為模組，並根據依賴關係建立一個依賴圖，最後打包成一個或多個的 bundle 檔案。
- Webpack 支援各種 loader 以及 plugin，可以對模組進行擴充，比方說程式碼分割、熱模組替換、開發伺服器等等資源：
    - 程式碼分割：[SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)，選擇將哪些 bundle 檔案進行拆分，已達到更好的分割和平行載入。
    - 熱模組替換(Hot Module Replacement)：在程式運行中，替換、刪減模組，都不需要重新載入頁面。
- 常見的 loader、plugin、entry 和 output：
    - loader：用於處理非 JavaScript 文件，比方說：CSS、圖片、字體，可以將這些文件轉換成 Webpack 可處理的模組。
    - plugin：用於擴展 Webpack 的功能，像是產生 Html 檔案的 HtmlWebpackPlugin、抽取 CSS 為單獨檔案的 MiniCssExtractPlugin。
    - entry：Webpack 建構的入口，指定 Webpack 要在哪個模組開始建構（可以是單個或多個）。
    - output：Webpack 建構後的輸出設定 。

## Vite

- 較新的前端建置工具，意在快速開發體驗和建構效能。
- 利用瀏覽器原生的 ES 模組支援，搭配 esbuild 預先建構功能，實現快速冷啟動和熱模組替換。
- 對 TypeScript、JSX、CSS 有開箱即用的支援，不需要複雜的設定。
- 在建置生產環境時，使用 Rollup 進行打包和最小化輸出。

## Webpack 與 Vite 的區別

- 建構速度上 Vite 優於 Webpack：因為 Vite 使用原生的 ES 模組。
- 學習成本上 Vite 優於 Webpack：Webpack 提供豐富的設定，但對初學者來說學習成本較高，Vite 設計較直觀簡單。
- 打包設置精細程度 Webpack 優於 Vite：Webpack 豐富的打包輸出設定，可以讓開發者對建置過程進行深度調整；Vite 使用 Rollup，雖然也可以產生體積小的打包，但在建構生產環境時，因為配置簡單的特性，也較沒有 Webpack 設定 這麼靈活。
- 生態系上 Webpack 多餘 Vite：Vite 為後進者，開發生態還在快速發展中，相較之下 Webpack 生態系較為成熟。
- Vite 本身屬於開發伺服器。Webpack 有開發伺服器的設置，但本身並不屬於開發伺服器。