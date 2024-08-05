export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "嘿，日安",
  /** your name */
  author: "Rian",
  /** website description */
  desc: "這是一個談論關於程式技術 x 數位生活 x 多角學習的相關部落格。",
  /** your deployed domain */
  website: "https://rian.cc",
  /** your locale */
  locale: "en-us",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://www.github.com/heyrian",
    },
    {
      name: "rss",
      href: "/atom.xml",
    },
    {
      name: "sms",
      href: "https://www.threads.net/@hey.rian.cc",
    },
    {
      name: "instagram",
      href: "https://instagram.com/hey.rian.cc",
    }
  ],
  /** your header info */
  header: {
    twitter: "@heyrian",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "胡适", path: "hu-shi" },
  ],
  /** your comment provider */
  comments: {
    // disqus: {
    //   // please change this to your disqus shortname
    //   shortname: "typography-astro",
    // },
    giscus: {
      repo:"heyrian/heyrian.github.io",
      repoId:"R_kgDOKfSzAA",
      category:"Rian.cc",
      categoryId:"DIC_kwDOKfSzAM4CaD6U",
      dis_title:"title",
      theme: 'light',
      loading: 'lazy',
    },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  },
  expressiveCode_theme: ['material-theme-palenight', 'slack-ochin']
}

