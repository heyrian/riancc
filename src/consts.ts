// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 * beian {string} Chinese policy
 */
export const site = {
  title: '嘿，日安！', // required
  favicon: '/favicon.svg', // required
  description: '',
  author: "日安", // required
  avatar: '/avatar.png', // required
  url: 'https://rian.cc', // required
  motto: 'Better late than never.',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  beian: '',
}

/**
 * busuanzi {boolean} link: https://busuanzi.ibruce.info/
 * lang {string} Default website language
 * codeFoldingStartLines {number}
 * ga {string|false}
 * memosUrl {string} memos server url
 * memosUsername {string} memos login name
 * memosPageSize {number} 10
 */
export const config = {
  busuanzi: false,
  lang: 'en', // en | zh-cn | zh-Hant | cs
  codeFoldingStartLines: 16, // Need to re-run the project to take effect
  ga: false, // If you want to integrate with Google Analytics, just enter your GA-ID here.

  // memos config
  memosUrl: '', // https://xxxx.xxx.xx
  memosUsername: '', // login name
  memosPageSize: 10, // number
}

/**
 * Navigator
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} optional "_self|_blank" open in current window / open in new window
 */
export const categories = [
  {
    name: 'About',
    iconClass: 'ri-information-line',
    href: '/about',
  },
  {
    name: "Blog",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },
  // {
  //   name: "Feed",
  //   iconClass: "ri-lightbulb-flash-line",
  //   href: "/feed/1",
  // },
  {
    name: "Memos",
    iconClass: "ri-quill-pen-line",
    href: "/memos",
  },
  {
    name: "Archive",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },
  // {
  //   name: "Message",
  //   iconClass: "ri-chat-1-line",
  //   href: "/message",
  // },
  {
    name: "Search",
    iconClass: "ri-search-line",
    href: "/search",
  },
  // {
  //   name: "More",
  //   iconClass: "ri-more-fill",
  //   href: "javascript:void(0);",
  //   children: [
  //     {
  //       name: 'About',
  //       iconClass: 'ri-information-line',
  //       href: '/about',
  //     },
  //     {
  //       name: 'Friends',
  //       iconClass: 'ri-user-5-line',
  //       href: '/friends',
  //       target: '_self',
  //     },
  //   ]
  // }
]

/**
 * Personal link address
 */
export const infoLinks = [
  // {
  //   icon: 'ri-telegram-fill',
  //   name: 'telegram',
  //   outlink: 'xxxxxxx',
  // },
  // {
  //   icon: 'ri-twitter-fill',
  //   name: 'twitter',
  //   outlink: 'xxxxxxx',
  // },
  {
    icon: 'ri-instagram-fill',
    name: 'instagram',
    outlink: 'https://www.instagram.com/hey.rian.cc',
  },
  {
    icon: 'ri-github-fill',
    name: 'github',
    outlink: 'https://github.com/heyrian',
  },
  {
    icon: 'ri-threads-line',
    name: 'threads',
    outlink: 'https://www.threads.net/@hey.rian.cc',
  }
  // {
  //   icon: 'ri-rss-fill',
  //   name: 'rss',
  //   outlink: 'xxxxxxx',
  // }
]

/**
 * donate
 * enable {boolean}
 * tip {string}
 * wechatQRCode: Image addresses should be placed in the public directory.
 * alipayQRCode: Image addresses should be placed in the public directory.
 * paypalUrl {string}
 */
export const donate = {
  enable: false,
  tip: "Thanks for the coffee !!!☕",
  wechatQRCode: "/WeChatQR.png",
  alipayQRCode: "/AliPayQR.png",
  paypalUrl: "https://paypal.me/xxxxxxxxxx",
}

export const giscus = {
  repo:"heyrian/heyrian.github.io",
  repoId:"R_kgDOKfSzAA",
  category:"Rian.cc",
  categoryId:"DIC_kwDOKfSzAM4CaD6U",
  dis_title:"title",
  theme: 'light',
  loading: 'lazy',
}

/**
 * Friendship Links Page
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks =
  [
    // {
    //   name: "Cirry's Blog",
    //   url: 'https://cirry.cn',
    //   avatar: "https://cirry.cn/avatar.png",
    //   description: '前端开发的日常'
    // },
  ]

/**
 * Comment Feature
 * enable {boolean}
 * type {string} required waline | giscus
 * walineConfig.serverUrl {string} server link
 * walineConfig.lang {string} link: https://waline.js.org/guide/features/i18n.html
 * walineConfig.pageSize {number} number of comments per page. default 10
 * walineConfig.wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * walineConfig.count {number} recent comment numbers
 * walineConfig.pageview {boolean} display the number of page views and comments of the article
 * walineConfig.reaction {string | string[]} Add emoji interaction function to the article
 * walineConfig.requiredMeta {string[]}  Set required fields, default anonymous
 * walineConfig.whiteList {string[]} set some pages not to display reaction
 */
export const comment = {
  enable: true,
  type: 'giscus', // waline | giscus,
  walineConfig: {
    serverUrl: "",
    lang: 'en',
    pageSize: 20,
    wordLimit: '',
    count: 5,
    pageview: true,
    reaction: true,
    requiredMeta: ["nick", "mail"],
    whiteList: ['/message/', '/friends/'],
  },

  // giscus config
  giscusConfig: {
    'data-repo': "heyrian/heyrian.github.io",
    'data-repo-id': "R_kgDOKfSzAA",
    'data-category': "Rian.cc",
    'data-category-id': "DIC_kwDOKfSzAM4CaD6U",
    'data-mapping': "title",
    'data-strict': "0",
    'data-reactions-enabled': "1",
    'data-emit-metadata': "0",
    'data-input-position': "top",
    'data-theme': "",
    'data-lang': "en",
    'crossorigin': "anonymous",
  }
}
