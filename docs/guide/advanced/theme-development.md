# 主题开发

学习如何为VuePress开发自定义主题。

## 主题结构

一个VuePress主题本质上是一个插件，它遵循特定的目录结构：

```
my-theme
├── components
│   └── MyComponent.vue
├── layouts
│   ├── Layout.vue
│   └── 404.vue
├── styles
│   └── index.scss
├── index.js
└── package.json
```

## 继承默认主题

大多数情况下，你不需要从零开始开发主题，可以继承默认主题：

```js
import { defaultTheme } from '@vuepress/theme-default'

export default {
  extends: defaultTheme({
    // 默认主题配置
  }),
  // 你的自定义配置
}
```
