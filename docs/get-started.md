# 快速开始

这是一个演示页面，展示了VuePress的基础功能。

## 页面

你可以在VuePress目录中添加markdown文件，每个markdown文件都会被转换为网站中的一个页面。

查看[路由][routing]了解更多详情。

## 内容

每个markdown文件都会[被渲染为HTML，然后转换为Vue单文件组件][content]。

VuePress支持基础的markdown语法和[一些扩展][synatex-extensions]，你也可以[在其中使用Vue特性][vue-feature]。

## 配置

VuePress使用`.vuepress/config.js`（或.ts）文件作为[站点配置][config]，你可以用它来配置你的站点。

对于[客户端配置][client-config]，你可以创建`.vuepress/client.js`（或.ts）。

同时，你也可以使用[frontmatter][]为每个页面添加配置。

## 布局和自定义

以下是控制`@vuepress/theme-default`布局的常见配置：

- [导航栏][navbar]
- [侧边栏][sidebar]

查看[默认主题文档][default-theme]获取完整参考。

你可以通过`.vuepress/styles/index.scss`文件[添加额外样式][style]。

## 示例导航

本站点包含以下主要部分：

- **首页** - 网站主页
- **快速开始** - 当前页面，介绍基础概念
- **指南** - 完整的使用指南，包含多级侧边栏
  - 基础知识 - 快速上手、目录结构、配置等
  - 进阶内容 - 主题开发、插件开发、部署等

点击导航栏中的"指南"查看多级侧边栏的示例效果！

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file
