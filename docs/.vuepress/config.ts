import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "潘彬彬的博客",
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
        text: 'Vue',
        link: '/vue/'
      },
      {
        text: 'Java',
        link: '/java/'
      },
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
      '/vue/': [
        {
          isGroup: true,
          text: 'VuePress',
          children: [
            {
              text: '从0开始',
              link: '/vue/VuePress搭建.md',
            }
          ]
        }
      ],
      '/java/': [
        {
          isGroup: true,
          text: 'java基础',
          children: [
            {
              text: 'Java学习路线',
              link: '/java/Java学习路线.md'
            },
            {
              text: 'Java核心技术卷一',
              link: '/java/JavaSE(Java核心技术卷一).md'
            },
            {
              text: 'XML',
              link: '/java/xml.md'
            },
            {
              text: '注解',
              link: '/java/注解.md'
            },
          ]
        }
      ],
      // 在/guide/下设置侧边栏
      '/guide/': [
        // 对象数组之1，一个小组
        {
          isGroup: true,
          text: 'guide',
          children: [
            {
              text: '开始',
              link: '/guide/getting-started.md',
            },
            {
              text: '关于我',
              link: '/guide/about-me.md',
            },
          ],
        },
      ]
    }
  },
});
