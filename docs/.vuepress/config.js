module.exports = {
  base: "/vuepress/",
  title: "myBlog",
  description: "Tevan Y的博客",
  head: [
    ['link', { rel: 'icon', href:'./assets/img/favicon.ico'}],
    ['meta', { name: 'author', content: 'Tevan Y'}]
  ],
  plugins: {
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': {
      selector: 'img',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    }
  },
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '更新时间',
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '前端',
        ariaLabel: 'note',
        items: [
          { text: 'less', link: '/about/less' },
          { text: 'element-ui', link: '/about/element-ui' },
        ],
        sidebar: [
          '/',
          '/page-a',
          ['/page-b', 'Explicit link text']
        ]
      },
      {
        text: '框架相关',
        ariaLabel: 'frame',
        items: [
          { text: 'angularJS', link: '/about/angular' },
        ],
        sidebar: [
          '/',
          '/page-a',
          ['/page-b', 'Explicit link text']
        ]
      },
      {
        text: '开发工具',
        ariaLabel: 'tools',
        items: [
          { text: 'git', link: '/about/Git' },
          { text: '正则表达式', link: '/about/reg'}
        ],
        sidebar: [
          '/',
          '/page-a',
          ['/page-b', 'Explicit link text']
        ]
      },
      { text: 'About me', 
        ariaLabel: 'about me',
        items: [
          { text: '我的简历', link: '/about/' },
          { text: '我的项目', link: '/about/about2' }
        ],
        sidebar: [
          '/',
          '/page-a',
          ['/page-b', 'Explicit link text']
        ] 
      },
      {
        text: 'more',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'vuepress官网', link: 'https://vuepress.vuejs.org/zh/' },
          { text: 'vue官网', link: 'https://cn.vuejs.org/index.html' }
        ],
        sidebar: [
          '/',
          '/page-a',
          ['/page-b', 'Explicit link text']
        ]
      }
    ]
  }
  
}