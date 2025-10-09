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
          children: ['/jfsz/0.md'],
        },
        {
          children: ['/jfsz/1.md'],
        },
        {
          children: ['/jfsz/2.md'],
        },
        {
          children: ['/jfsz/3.md'],
        },
      ],
    },
  }),

  bundler: webpackBundler(),
})
