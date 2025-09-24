# 快速上手

本页面将指导你从头开始搭建一个简单的VuePress文档站点。

## 前提条件

- [Node.js](https://nodejs.org/) v16 或更高版本
- 包管理器（如 npm、yarn 或 pnpm）

## 手动安装

### 第1步：创建并进入一个新目录

```bash
mkdir vuepress-starter
cd vuepress-starter
```

### 第2步：初始化项目

```bash
npm init
```

### 第3步：将VuePress安装为本地依赖

```bash
npm install -D vuepress@next @vuepress/client@next @vuepress/theme-default@next
```

### 第4步：创建你的第一篇文档

```bash
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

### 第5步：在package.json里添加一些scripts

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

### 第6步：在本地启动服务器

```bash
npm run docs:dev
```

VuePress会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。
