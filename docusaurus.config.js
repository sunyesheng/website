/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '孙业盛',
  tagline: 'Dinosaurs are cool',
  url: 'https://sunyesheng.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/home/logo.ico',
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.
  // staticDirectories: ['public', 'static'],
  themeConfig: {
    // 增加C++语言高亮提示，其他语言参考:  https://prismjs.com/#supported-languages
    algolia: {
      appId: 'GD9V1PD0YO',
      apiKey: '9ed53a6aca260d7c24fec5cec79d4584',
      indexName: 'sunyesheng',
      contextualSearch: false,
    },
    prism: {
      additionalLanguages: ['cpp'],
    },
    // SEO
    metadata: [
      { name: '孙业盛', content: '孙业盛, 博客' },
      { name: '前端', content: 'Front End' },
      { name: '博客', content: 'blog' },
    ],
    navbar: {
      title: '孙业盛',
      logo: {
        alt: 'My Site Logo',
        src: 'img/home/logo.ico',
      },
      items: [
        {
          to: 'docs/practical/markdown',
          label: '学习',
          position: 'right',
        },
        // {
        //   to: '/',
        //   activeBasePath: 'blog',
        //   label: '前端',
        //   position: 'right',
        //   items: [
        //     {
        //       label: 'Javascript',
        //       to: '/blog/tags/Javascript',
        //     },
        //   ],
        // },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} 孙业盛, Built with Docusaurus.
      <a style='text-decoration:none' href='https://beian.miit.gov.cn'><p style='color:white'>陕ICP备2021007146号-2</p></a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // todo edit this page
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
          editUrl: undefined,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  // 国际化
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
  plugins: ['docusaurus-plugin-sass'],
}
