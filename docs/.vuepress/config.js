import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      '/',
      '/get-started',
      {
        text: '文档',
        link: '/jfsz/',
      },
    ],

    sidebar: {
      '/jfsz/': [
        {
          text: '目录',
          children: ['/jfsz/0.md'],
        },
        {
          text: '自序',
          children: ['/jfsz/1.md'],
        },
        {
          text: '第一章',
          children: ['/jfsz/2.md'],
        },
      ],
    },
  }),

  bundler: webpackBundler(),
})
