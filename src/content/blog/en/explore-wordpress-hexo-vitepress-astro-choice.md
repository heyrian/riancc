---
title: Explore Wordpress Hexo Vitepress Astro Choice
customSlug: explore-wordpress-hexo-vitepress-astro-choice
tags:
  - astro
  - frontend
  - webdev
snippet: This is a front-end engineers in the choice of blog site technology comparison article, which contains now common Wordpress, Hexo, Vite Press, Astro.
publishDate: 2023-10-16 16:02
category: Development
---
After starting my business from 2019 I started to get out of touch with the tech scene, so I didn't keep up with the technologies emerging from 2019 to 2023, and decided to restart my blog by referring to [VueMaster](https://www.vuemastery.com/blog/nuxt-vs-vitepress-vs-astro)'s article, the technologies I can choose from are as follows:

* Wordpress + Bitnami + GCP Compute Engine
* Hexo
* Vite Press
* Nuxt
* Astro

## Wordpress + Bitnami + GCP Compute Engine

It seems not bad to build a Wordpress on GCP, because with CMS management, I can finish my writing easily without having to open the editor and type md files.

Considering that I can't build programs freely, I can't do version control, I don't support markdown syntax, and if I want to do some sitemap and image compression optimization, I have to install some plugins, it's exhausting to think about it, so I gave up on this choice.

## Hexo

![image.png](/images/hexo.png)

Hexo is really a good companion that has been with me since 5 years ago. Based on Node.js, it allows the front-end to easily build a static page, and the site looks pretty much the same as it did 5 years ago. There are about 400 themes to choose from, but some of the themes are written in technologies that may be very old, like jQuery's suite, I'm not sure if that's a pain point or not.

I want to try some different techniques for this blog re-launch, and this one is on the watch list.

## Vite Press

At first I tried Vite Press, but I felt that not many people used it, and the ecosystem was a bit small. The ecosystem is a bit small. Because of Vue's syntax, the feeling is similar to hexo. A while ago, the official website was updated, and the new website looks much more beautiful, but the ecosystem is too small for writing documents. After all, it's only the first official release, so it's on the to-watch list.

## Nuxt

I've thought about starting a Nuxt project to fight him directly, and if I don't run into Astro next I'll probably do that.

## Astro

Astro supports many front-end frameworks, React, Vue, Preact, etc. You can even mix frameworks, let's say like this:

```jsx
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

~~This is a sample Don't do that.~~

When I entered the Astro website, I was firstly surprised by the official website's documentation, [Blog Tutorial](https://docs.astro.build/en/tutorial/0-introduction/), which is very detailed, as if there is a senior partner beside the step by step guidance, even a novice can easily Startup a blog project.

![image 1.png](/images/build-blog-so-easy-by-astro.png)

Following his tutorial, I found out that the website deployment is not using Github Page, but Netlify (although I know that Astro can build Static or SSR), which is a bit similar to the Heroku service that I left a while ago, and which I'll write more about later.

If you don't want to deploy to Netlify, he also has a reference for deploying to other services [Guideline](https://docs.astro.build/en/guides/deploy/). For example, if you want to deploy to the Github Page mentioned earlier, we recommend you to use Github Action to do it.

![image 2.png](/images/good-doc-let-me-cry.png)

If you really want to talk about the shortcomings, Astro website [theme](https://astro.build/themes/) is not as rich as Hexo, after searching, I found that most of the themes are made with React (foreign developers still love to use React), for some Vue framework users, in the modification of the theme may feel tied up, but for me it is not bad (very early have studied React). For some Vue framework users, they may find it difficult to modify the theme, but for me, it's not a problem (I have studied React in the early days), so I'm just going to choose a theme and start working on it.