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
        link: '/guide/',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: ['/guide/README.md'],
        },
        {
          text: '基础',
          children: [
            '/guide/essentials/README.md',
            '/guide/essentials/getting-started.md',
            '/guide/essentials/directory-structure.md',
            '/guide/essentials/config.md',
          ],
        },
        {
          text: '进阶',
          children: [
            '/guide/advanced/README.md',
            '/guide/advanced/theme-development.md',
            '/guide/advanced/plugin-development.md',
            '/guide/advanced/deployment.md',
          ],
        },
      ],
    },
  }),

  bundler: webpackBundler(),
})
