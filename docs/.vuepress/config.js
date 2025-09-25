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
        text: '指南',
        link: '/jfsz/',
      },
    ],

    sidebar: {
      '/jfsz/': [
        {
          text: '0',
          children: ['/jfsz/0.md'],
        },
        {
          text: '指南',
          children: ['/jfsz/README.md'],
        },
        {
          text: '基础',
          children: [
            '/jfsz/essentials/README.md',
            '/jfsz/essentials/getting-started.md',
            '/jfsz/essentials/directory-structure.md',
            '/jfsz/essentials/config.md',
          ],
        },
        {
          text: '进阶',
          children: [
            '/jfsz/advanced/README.md',
            '/jfsz/advanced/theme-development.md',
            '/jfsz/advanced/plugin-development.md',
            '/jfsz/advanced/deployment.md',
          ],
        },
      ],
    },
  }),

  bundler: webpackBundler(),
})
