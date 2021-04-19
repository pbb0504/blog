// webpack配置
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "潘彬彬的博客",
  description: "Just playing around",
  base: "/blog/",

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",

    // 它将被用作 仓库链接 的链接。仓库链接 将会显示为导航栏的最后一个元素。
    repo: "pbb0504/blog",
    // 它将被用作 仓库链接 的文字。仓库链接 将会显示为导航栏的最后一个元素。
    repoLabel: "github",
    // 编辑此页 链接的文字。
    editLinkText: "在GitHub上编辑此页",
    // 最近更新时间戳 标签的文字。
    lastUpdatedText: "上次更新",
    backToHome: "返回首页",
    contributorsText: "贡献者列表",
    navbar: [
      {
        text: "Vue",
        link: "/vue/",
      },
      {
        text: "Java",
        link: "/java/",
      },
      {
        text: "首页",
        link: "/README.md",
      },
    ],
    sidebar: {
      "/vue/": [
        {
          isGroup: true,
          text: "VuePress",
          children: ["/vue/VuePress搭建.md"],
        },
      ],
      "/java/": [
        {
          isGroup: true,
          text: "java基础",
          children: [
            "/java/Java学习路线.md",
            "/java/JavaSE(Java核心技术卷一).md",
            "/java/设计模式.md",
            "/java/xml.md",
            "/java/注解.md",
            "/java/cookie和session.md",
          ],
        },
      ],
    },
  },
});
