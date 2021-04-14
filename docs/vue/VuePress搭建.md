# VuePress2
[VuePress2官方文档](https://vuepress2.netlify.app/zh/)

[github](https://github.com/vuepress/vuepress-next)

# 介绍
VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在它已经在帮助大量用户构建他们的文档、博客和其他静态网站。

# 它是如何工作的？
一个 VuePress 站点本质上是一个由 Vue 和 Vue Router 驱动的单页面应用 (SPA)。

路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 markdown-it 编译为 HTML ，然后将其作为 Vue 组件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容。

在开发过程中，我们启动一个常规的开发服务器 (dev-server) ，并将 VuePress 站点作为一个常规的 SPA。如果你以前使用过 Vue 的话，你在使用时会感受到非常熟悉的开发体验。

在构建过程中，我们会为 VuePress 站点创建一个服务端渲染 (SSR) 的版本，然后通过虚拟访问每一条路径来渲染对应的 HTML 。这种做法的灵感来源于 Nuxt 的 nuxt generate 命令，以及其他的一些项目，比如 Gatsby。

# 快速上手
## 手动安装
- **步骤一：** 创建并进入一个新目录
```sh
mkdir vuepress-starter
cd vuepress-starter
```
- **步骤二：** 初始化项目
```sh
git init
yarn init
```
- **步骤三：** 将VuePress安装为本地依赖
```sh
yarn add -D vuepress@next
```
- **步骤四：** 在`pacage.json`中添加一些[scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)
```sh
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
- **步骤五：** 将默认的临时目录和缓存目录添加到 .gitignore 文件中
```sh
一般自动生成（或经过编辑后）的目录结构为：
|--docs
|  |--.vuepress
|  |   |--.cache
|  |   |--.temp
|  |   |--public
|  |   |--config.ts
|  |--README.md
|--.gitignore
|--package.json

此时需要加入.gitignore的目录为`/node_modules`、`/docs/.vuepress/.cache`、`/docs/.vuepress/.temp`
```
- **步骤六：** 创建你的第一篇文档
```sh
mkdir docs
echo '#Hello World' > docs/README.md
```
- **步骤七：** 在本地启动服务器来开发你的文档网站
```sh
yarn docs:dev
```