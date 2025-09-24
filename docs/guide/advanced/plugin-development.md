# 插件开发

VuePress插件可以为你的站点添加功能。

## 插件结构

一个插件就是一个函数，接受插件选项作为参数，返回一个对象：

```js
const myPlugin = (options = {}) => {
  return {
    name: 'my-plugin',
    // 插件钩子
  }
}
```

## 常用钩子

### onInitialized

在应用初始化之后调用：

```js
export default {
  name: 'my-plugin',
  onInitialized(app) {
    console.log('应用已初始化')
  },
}
```

### extendsPage

修改页面对象：

```js
export default {
  name: 'my-plugin',
  extendsPage(page) {
    page.title = `${page.title} - 自定义后缀`
  },
}
```
