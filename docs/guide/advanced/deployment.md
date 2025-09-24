# 部署

本指南基于以下条件：

- 文档放置在项目的 `docs` 目录中
- 你正在使用默认的构建输出位置

## GitHub Pages

### 使用GitHub Actions

在你的项目中，创建一个如下的 `.github/workflows/docs.yml` 文件：

```yaml
name: docs

on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
        with:
          # "最近更新时间" 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build docs
        run: npm run docs:build

      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v3
        with:
          target_branch: gh-pages
          build_dir: docs/.vuepress/dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Netlify

在 Netlify 中，创建一个新站点，并进行如下配置：

- **构建命令**: `npm run docs:build`
- **发布目录**: `docs/.vuepress/dist`
