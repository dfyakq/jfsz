# 配置

## 配置文件

VuePress站点的基本配置文件是 `.vuepress/config.js`，它应该导出一个JavaScript对象：

```js
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
})
```

## 基础配置

### title

- 类型: `string`
- 详细: 站点的标题，它将会被用作所有页面标题的前缀。

### description 

- 类型: `string`
- 详细: 站点的描述，它将会以 `<meta>` 标签渲染到当前页面的 HTML 中。

### lang

- 类型: `string`
- 默认值: `en-US`
- 详细: 站点的语言。
