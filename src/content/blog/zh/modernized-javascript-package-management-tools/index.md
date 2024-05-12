---
title: 【前端開發必備工具系列】之二：yarn - 現代化的 JavaScript 套件管理工具
customSlug: modernized-javascript-package-management-tools
tags:
  - 套件管理工具
  - 前端工程
  - 網頁開發
  - Yarn
snippet: 本篇介紹由 facebook 開發，替代 npm 的管理工具——yarn，以及其的使用方式以及其優點。
publishDate: 2024-04-28 17:38
category: Development
---

## 什麼是 yarn
- yarn 是由 Facebook 開發的替代 npm 的套件管理工具。

- 一開始主要解決 npm 安裝速度慢以及相依套件版本衝突的問題。

- yarn 使用 `yarn.lock` 檔案來鎖定相依套件的版本，確保在不同環境中安裝的套件版本一致。

- 使用並行安裝，不像 npm 逐步安裝套件。

- 使用更有效的緩存機制。npm 有時候在緩存中存在所需要的套件版本，npm 還是會重新下載套件，因此他的緩存機制比較不可靠；yarn 會自動清理不需要的緩存，減少緩存目錄的體積，如果緩存的套件版本 `yarn.lock` 中的版本不相符，yarn 會重新下載正確版本的套，並更新緩存。

- 提供離線模式以及工作區（Workspaces）支援，工作區的設計對於 Monorepo 架構非常有用，可以共享相依套件並簡化套件之間的引用。



## 常用命令：

- `yarn install`

- `yarn add [package]`

- `yarn run [script]`

- `yarn remove [package]`

## 延伸思考：

### `package.lock.json` 已經確保相依套件版本，為什麼 Yarn 卻說他意指要解決相依套件版本衝突的問題？

- 主要因為 npm 在早期版本中存在一些問題和限制，在 npm 5 版本之前，npm 沒有 `package-lock.json` 檔案，因此 Yarn 在早於 npm 5 版本就引入了 `yarn.lock` 檔案，用於鎖定相依套件的版本，所以 npm 5 開始借鑑了 Yarn 的解決方案使用了`package.lock.json`。即使 npm 5 引入了 `package-lock.json` 檔案，但 yarn 在效能跟安全性上仍有優勢，受到廣泛使用。

### 什麼是離線模式？

- 離線模式是指當你使用 yarn 安裝套件時，這在環境受限或是網路不穩定的情況十分適用，使用 `--offline` 命令啟用離線模式。yarn 會自動將套件的壓縮檔案下載到本地緩存目錄中，在離線的狀態查看緩存目錄使否有所需要的套件。

### 什麼是工作區（Workspaces）？

- 工作區（Workspace）是一種組織和管理多個相關專案或套件的方式。

- 目錄結構上，假設專案有兩個工作區 (a、b)，根目錄有一個 `package.json`，兩個工作區底下分別可以個別有自己的 `package.json`。

- 所有專案都共享同一個 `node_modules`，執行 `yarn install`，yarn 會檢查所有套件的相依性並安裝在 node_modules。

- 工作區可以相互引用，在工作區 a 可以將工作區 b 作為相依性參考，在工作區 a 的 `package.json` 下設定。

- my-project 專案目錄結構

```bash title="my-project"
my-project/
  ├── package.json
  ├── yarn.lock
  └── ...
  └── workspace-a
  |   ├── package.json
  |   └── ...
  └── workspace-b
        ├── package.json
        └── ...
```

- 專案下 package.json

```javascript title="package.json"
{
  "private": true,
  "workspaces": ["workspace-a", "workspace-b"]
}
```
- 工作區 a 的 package.json：

```javascript title="workspace-a/package.json"
{
  "name": "workspace-a",
  "version": "1.0.0",

  "dependencies": {
    "cross-env": "5.0.5"
  }
}
```
- 工作區 b 的 package.json，並引用工作區 a：

```javascript title="workspace-b/package.json"
{
  "name": "workspace-b",
  "version": "1.0.0",

  "dependencies": {
    "cross-env": "5.0.5",
    "workspace-a": "1.0.0"
  }
}
```
