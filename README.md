# Rxxkles.github.io

Cheer Lee 的个人主页，使用原生 HTML、CSS 和 JavaScript 构建，可直接部署到 GitHub Pages。

## 项目结构

```text
.
├── index.html
└── assets/
    ├── css/
    │   ├── tokens.css       # 颜色、字体与布局变量
    │   ├── base.css         # 全局基础样式与无障碍辅助样式
    │   ├── layout.css       # 页面区块与组件布局
    │   ├── components.css   # 按钮、状态指示器等可复用组件
    │   └── responsive.css   # 平板和移动端适配
    └── js/
        └── main.js          # 导航、滚动显示与动态年份
```

## 本地预览

直接打开 `index.html` 即可预览；也可以使用任意静态文件服务器运行。页面字体使用 Google Fonts，未加载时会自动回退到系统字体。

## 个性化

- 在 `index.html` 更新自我介绍、项目方向和 GitHub 链接。
- 在 `assets/css/tokens.css` 调整主题色、字体和内容宽度。
- 在 `assets/css/` 对应样式文件中调整页面基础样式、布局或响应式规则。
- 在 `assets/js/main.js` 调整移动导航与滚动显示交互。
