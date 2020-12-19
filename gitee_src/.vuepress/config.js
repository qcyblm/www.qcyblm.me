const secret = require('./secret')
module.exports = {
  title: '青春永不落幕',
  description: '一位静态网站设计爱好者',
  head: [
    ['meta', { name: 'baidu-site-verification', content: 'code-jNjoWXWohM' }]
  ],
  temp: '.temp',
  cache: '.cache',
  theme: '@qcyblm/vpx',
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.webp',
    nav: [
      { text: '主页', link: '/', icon: 'fa fa-home' },
      { text: '关于', link: '/about', icon: 'fa fa-user' },
      { text: '项目', link: '/project', icon: 'fa fa-th-large' },
      {
        text: 'Windows',
        icon: 'fab fa-windows',
        items: [
          { text: 'Windows常用软件下载官网', link: '/windows/software' },
          { text: 'Windows PE 工具', link: '/windows/wepe' }
        ]
      },
      { text: '文档', link: '/book/', icon: 'fa fa-book' },
      { text: '导航', link: '/book/', icon: 'fa fa-bookmark' },
      { text: '支持', link: '/support', icon: 'fa fa-bell' },
    ],
    sidebar: {
      '/windows/': [
        '/windows/software',
        '/windows/wepe'
      ]
    },
    repo: {
      platform: 'https://github.com/',
      icon: 'fab fa-github',
      owner: 'qcyblm',
      repositories: 'qcyblm.github.io',
    },
    editLinks: true,
    editLinkText: '编辑当前页',
    edit: {
      docsDir: 'gitee_src',
    },
    lastUpdated: '最后更新时间',
    footer: {
      createYear: '2020',
      author: 'qcyblm',
      authorLink: 'https://qcyblm.gitee.io/',
      licensedLink: 'https://github.com/qcyblm/qcyblm.github.io/blob/master/LICENSE',
      licensed: 'MIT',
    }
  },
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      platform: 'gitee',
      owner: 'qcyblm',
      repo: 'qcyblm',
      clientId: secret.clientId,
      clientSecret: secret.clientSecret,
      locale: 'zh'
    },
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).format("LLLL Z")
      }
    }
  }
}