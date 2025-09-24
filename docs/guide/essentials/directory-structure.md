# 目录结构

VuePress遵循 **"约定优于配置"** 的原则，推荐的目录结构如下：

```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

## 目录说明

- `docs/.vuepress/`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/config.js`: 配置文件的入口文件。
- `docs/.vuepress/public/`: 静态资源目录。
- `docs/.vuepress/styles/`: 用于存放样式相关的文件。
