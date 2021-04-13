import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "Hello VuePress",
  description: "Just playing around",
  base: "/blog/",

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    // 它将被用作 仓库链接 的链接。仓库链接 将会显示为导航栏的最后一个元素。
    repo: 'pbb0504/blog',
    // 它将被用作 仓库链接 的文字。仓库链接 将会显示为导航栏的最后一个元素。
    repoLabel: 'github',
    /* // 编辑此页 链接的文字。
    editLinkText: '编辑此页面',
    // 最近更新时间戳 标签的文字。
    lastUpdatedText: '最近更新', */
    navbar: [
      {
        text: "guide",
        link: "/guide/",
      },
      {
        text: 'index',
        link: '/README.md'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          isGroup: true,
          text: 'guide',
          children: ['/guide/demo1.md','/guide/demo2.md'],
        },
      ]
    }
  },
});
