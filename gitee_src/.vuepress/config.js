module.exports = {
  title: '青春永不落幕',
  description: '一位静态网站设计爱好者',
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
      clientId: 'f04c9e0dcb9b0a4556f39546ae91add9d5ba9d533aace5d37777bf95af5e99ac',
      clientSecret: '21aacdd7635157cf207d24a1f126ce224880197e55c24ef5f24ec02bf233b64a',
      locale: 'zh'
    },
  }
}
