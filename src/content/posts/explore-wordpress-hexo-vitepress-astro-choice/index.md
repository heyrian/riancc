---
title: 探索 Wordpress、Hexo、Vite Press 到 Astro 的選擇之道
description: 這是一個前端工程師在選擇部落格架站技術的比較文章，裡面包含現在常見的 Wordpress、Hexo、Vite Press、Astro。
pubDate: 2023-10-16 16:02
categories: ['Development']
---

<!-- <details><summary>Open example</summary>

Tada! :tada:

</details> -->


從2019年開始創業之後開始跟技術圈脫節，因此從2019到2023興起的技術我就沒有跟上，決定重新啟動部落格，參考 [VueMaster](https://www.vuemastery.com/blog/nuxt-vs-vitepress-vs-astro) 的文章，我列舉我目前有的幾個選擇：

* Wordpress + Bitnami + GCP Compute Engine
* Hexo
* Vite Press
* Nuxt
* Astro

## Wordpress + Bitnami + GCP Compute Engine

在 GCP 上建置一個 Wordpress 好像還不錯，因為有 CMS 管理，我要寫作可以很輕鬆完成，不用再打開編輯器辛苦的打 md 檔，可是無法自由建構程式、不能進版控、不支援 markdown，再加上如果要做一些 sitemap、圖片壓縮優化，就要裝一些 plugin，想到就心累。

放棄這個選項。

## Hexo

![image.png](hexo.png)

Hexo 真的是五年前就開始陪伴我的好朋友了，基於 Node.js，它可以讓前端輕鬆建制一個靜態頁面，網站長的跟五年前差不多，裡面有將近四百多個主題供你選擇，但主題裡面有些寫的技術可能就很陳舊，比方說 jQuery 的套件之類的，我不確定算不算痛點就是了 XD

這次部落格再置我想嘗試一些不一樣的技術，這個先列再觀察清單。

## Vite Press

我一開始先從 Vite Press 試用，但感覺使用的人還不多，生態圈有點小，是使用 Vue 的語法下去寫，用起來跟 hexo 的感受沒什麼太大差異，前陣子有更新網站，新網站看起來漂亮多了，但生態圈真的不大，官方 release 第一版而已 QQ

我覺得這個目前比較適合拿來寫一些文件，比方說你有開發一些套件，拿這個寫文件我就覺得不錯，部落格就先暫緩再觀察。

## Nuxt

我有想過要不要直接開一個 Nuxt 專案直接跟他拼了，如果我接下來沒有遇到 Astro 的話我應該會這麼做。

## Astro

Astro 支援許多前端框架，React、Vue、Preact 等等，你甚至可以混合框架，比方說像這樣：

```astro title="example.astro"
---
// Example: Mixing multiple framework components on the same page.
import MyReactComponent from '../components/MyReactComponent.jsx';
import MySvelteComponent from '../components/MySvelteComponent.svelte';
import MyVueComponent from '../components/MyVueComponent.vue';
---
<div>
  <MySvelteComponent />
  <MyReactComponent />
  <MyVueComponent />
</div>
```

~~這是範例，拜託不要這樣做~~

進到 Astro 網站，首先被官方網站的文件嚇到，[Blog Tutorial](https://docs.astro.build/en/tutorial/0-introduction/) 文件有夠詳細，真的像是旁邊有個老司機手把手教，我這個大菜雞都能很輕鬆 Startup 一個部落格專案。

![image 1.png](build-blog-so-easy-by-astro.png)

跟著他的教學過程，發現最後網站部署不是用 Github Page，而是 Netlify（雖然我知道 Astro 可以建置 Static 或 SSR），Netlify 跟前陣子逝去的 Heroku 服務有點相像，之後我會再寫文章來說這個服務。

如果你不想部署到 Netlify 的話，他還有部署到其他的服務的 [Guideline](https://docs.astro.build/en/guides/deploy/)，比方說像是剛剛說的 Github Page，會推薦使用 Github Action 下去做。

![image 2.png](good-doc-let-me-cry.png)

如果真的要講缺點的話，Astro 網站上的[主題](https://astro.build/themes/)沒有像 Hexo 這麼豐富，Filter後發現，裡面通常都是用 React 寫（國外開發者還是比較愛用 React），對於一些 Vue 框架愛用者，在改主題的時候可能會覺得綁手綁腳，但對我來說是沒差（很早期有研究過 React），接下來就是選定主題之後開始做。

今天就介紹到這邊，我們下篇文章見。