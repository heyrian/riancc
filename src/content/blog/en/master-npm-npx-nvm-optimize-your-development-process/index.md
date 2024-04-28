---
title: 【前端開發必備工具系列】之一：掌握 npm、nvm、npx，優化你的開發流程
customSlug: master-npm-npx-nvm-optimize-your-development-process
tags:
  - tools
  - frontend
  - webdev
snippet: 本篇介紹 npm、nvm 和 npx 的使用方式，以及如何透過這些工具來優化你的開發流程。
publishDate: 2024-04-27 12:01
category: Development
---

## npm（Node Package Manager）

- Node.js 的套件管理工具，用來安裝、管理、分享 JavaScript 的套件。
- `package.json`：當你使用 `$npm install` ，專案會根據這個檔案來安裝套件。
- `package.lock.json`：npm 5.0 版本引入的一個特性，可以控制專案上的套件所相依的套件版本。

`npm install` 安裝套件常用指令：
  - `-g` 或 `—globe`：全局安裝指令，安裝在你的本地環境中，在你的電腦任何地方都可以使用你安裝的套件。
  - `—save `或 `-S`：在 npm 5.0 之前，使用 `$ npm install <package-name>`，他只會將這個套件安裝在 node_modules 資料夾，並不會變更 `package.json`。在 5.0 之後，安裝後會自動改變`package.json`，因此這個選項已經不常使用了。
  - `—save—dev` 或 `-D`：只安裝在開發環境，比方說測試框架、程式碼檢查工具，這些都是生產環境不需要的套件。
  - `npm install --production `：執行安裝指令。只安裝在 `package.json` 中 `dependencies` 的套件，忽略 `devDependencies` 的套件，有助於減少生產環境的負擔。

## nvm（Node Version Manager）

- 在不同專案上，我們可能需要依賴不同 Node.js 版本，你可以使用這個工具為每個專案設置不同的版本。
- 可以測試專案在不同 Node.js 下的兼容性。
- 當 Node.js 有新版本，可以使用 nvm 安裝嘗試新版本，不用擔心影響本地的穩定版本。

### 常用命令
`nvm install <version>`：安裝指定版本的 Node.js。
`nvm use <version>`：切換到指定版本的 Node.js。
`nvm alias default <version>`：設定預設的 Node.js 版本。

### 延伸思考：

如果我在專案底下使用 nvm，nvm 怎麼知道我是要更改專案設置的 Node.js 版本，還是全局的 Node.js？

- nvm 使用`.nvmrc`文件管理各個專案下的 Node.js 版本。
- `.nvmrc` 文件是一個簡單的文本文件，它包含了一個 Node.js 版本字串，通常只有一行。
- 當你在專案根目錄下執行 `nvm use`，並且不帶版本號，它就會開始查找`.nvmrc`文件，它會自動在當前目錄以及父目錄查找`.nvmrc`，如果找到就可以使用文件中指定的版本。
- 如果在一個沒有`.nvmrc`文件的專案目錄執行`nvm use`那 nvm 會使用你在本地環境使用的 Node.js 版本。

## npx（Node Package Execute）

- npx 是一個 npm 的執行工具，主要管理 npm 套件的執行，從 npm 5.2 版本開始提供。
- 他可以在你的專案中下載套件的臨時版本，執行後一次之後就會刪除。
- npx 不會改變你的 `package.json`，所以他可以保持你的環境不受污染。

### 延伸思考：

- 他的臨時下載位置在哪？
在本地環境的快取目錄。當你使用 `$npx package@1.1.1 —version` 他會先在本地的\``node_modules/.bin`尋找`package@1.1.1`，如果沒有這個版本，到本機環境的快取目錄尋找，以 mac 來說通常是 `~/.npm/_cacache`，還是找不到就會在 npm 伺服器上臨時下載新的版本到你的快取目錄中。

- 執行一次之後就要再重下 npx 指令嗎？
是的，在執行程式之後，npx 會清理臨時目錄，如果你需要再次測試 1.1.1 的版本，必須再次執行`$npm package@1.1.1 —version`。