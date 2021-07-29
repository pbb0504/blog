"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[515],{7085:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-5d4f8988",path:"/vue/VuePress%E6%90%AD%E5%BB%BA.html",title:"VuePress2",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"手动安装",slug:"手动安装",children:[]}],filePathRelative:"vue/VuePress搭建.md",git:{updatedTime:1618730948e3,contributors:[]}}},1846:(s,n,a)=>{a.r(n),a.d(n,{default:()=>V});var e=a(6252);const l=(0,e.Wm)("h1",{id:"vuepress2",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#vuepress2","aria-hidden":"true"},"#"),(0,e.Uk)(" VuePress2")],-1),r={href:"https://vuepress2.netlify.app/zh/",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Uk)("VuePress2 官方文档"),t={href:"https://github.com/vuepress/vuepress-next",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("github"),u=(0,e.uE)('<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。</p><p>VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在它已经在帮助大量用户构建他们的文档、博客和其他静态网站。</p><h1 id="它是如何工作的" tabindex="-1"><a class="header-anchor" href="#它是如何工作的" aria-hidden="true">#</a> 它是如何工作的？</h1><p>一个 VuePress 站点本质上是一个由 Vue 和 Vue Router 驱动的单页面应用 (SPA)。</p><p>路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 markdown-it 编译为 HTML ，然后将其作为 Vue 组件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容。</p><p>在开发过程中，我们启动一个常规的开发服务器 (dev-server) ，并将 VuePress 站点作为一个常规的 SPA。如果你以前使用过 Vue 的话，你在使用时会感受到非常熟悉的开发体验。</p><p>在构建过程中，我们会为 VuePress 站点创建一个服务端渲染 (SSR) 的版本，然后通过虚拟访问每一条路径来渲染对应的 HTML 。这种做法的灵感来源于 Nuxt 的 nuxt generate 命令，以及其他的一些项目，比如 Gatsby。</p><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1><h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h2><ul><li><strong>步骤一：</strong> 创建并进入一个新目录</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter\n<span class="token builtin class-name">cd</span> vuepress-starter\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><strong>步骤二：</strong> 初始化项目</li></ul>',13),c=(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"git"),(0,e.Uk)(" init\n"),(0,e.Wm)("span",{class:"token function"},"yarn"),(0,e.Uk)(" init\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br")])],-1),i=(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"git"),(0,e.Uk)(" init\n"),(0,e.Wm)("span",{class:"token function"},"npm"),(0,e.Uk)(" init\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br")])],-1),m=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("strong",null,"步骤三："),(0,e.Uk)(" 将 VuePress 安装为本地依赖")])],-1),d=(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"yarn"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"add"),(0,e.Uk)(" -D vuepress@next\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])],-1),b=(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"npm"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"install"),(0,e.Uk)(" -D vuepress@next\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])],-1),k=(0,e.Wm)("strong",null,"步骤四：",-1),g=(0,e.Uk)(" 在"),h=(0,e.Wm)("code",null,"pacage.json",-1),W=(0,e.Uk)("中添加一些"),v={href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Uk)("scripts"),x=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;docs:dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span>,\n    <span class="token string">&quot;docs:build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><strong>步骤五：</strong> 将默认的临时目录和缓存目录添加到 .gitignore 文件中</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>一般自动生成（或经过编辑后）的目录结构为：\n<span class="token operator">|</span>--docs\n<span class="token operator">|</span>  <span class="token operator">|</span>--.vuepress\n<span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>--.cache\n<span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>--.temp\n<span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>--public\n<span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>--config.ts\n<span class="token operator">|</span>  <span class="token operator">|</span>--README.md\n<span class="token operator">|</span>--.gitignore\n<span class="token operator">|</span>--package.json\n\n此时需要加入.gitignore的目录为<span class="token variable"><span class="token variable">`</span>/node_modules<span class="token variable">`</span></span>、<span class="token variable"><span class="token variable">`</span>/docs/.vuepress/.cache<span class="token variable">`</span></span>、<span class="token variable"><span class="token variable">`</span>/docs/.vuepress/.temp<span class="token variable">`</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li><strong>步骤六：</strong> 创建你的第一篇文档</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> docs\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;#Hello World&#39;</span> <span class="token operator">&gt;</span> docs/README.md\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><strong>步骤七：</strong> 在本地启动服务器来开发你的文档网站</li></ul>',6),w=(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"yarn"),(0,e.Uk)(" docs:dev\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])],-1),P=(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"npm"),(0,e.Uk)(" run docs:dev\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])],-1),V={render:function(s,n){const a=(0,e.up)("OutboundLink"),V=(0,e.up)("CodeGroupItem"),U=(0,e.up)("CodeGroup");return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,(0,e.Wm)("p",null,[(0,e.Wm)("a",r,[p,(0,e.Wm)(a)])]),(0,e.Wm)("p",null,[(0,e.Wm)("a",t,[o,(0,e.Wm)(a)])]),u,(0,e.Wm)(U,null,{default:(0,e.w5)((()=>[(0,e.Wm)(V,{title:"YARN",active:""},{default:(0,e.w5)((()=>[c])),_:1}),(0,e.Wm)(V,{title:"NPM"},{default:(0,e.w5)((()=>[i])),_:1})])),_:1}),m,(0,e.Wm)(U,null,{default:(0,e.w5)((()=>[(0,e.Wm)(V,{title:"YARN",active:""},{default:(0,e.w5)((()=>[d])),_:1}),(0,e.Wm)(V,{title:"NPM"},{default:(0,e.w5)((()=>[b])),_:1})])),_:1}),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[k,g,h,W,(0,e.Wm)("a",v,[f,(0,e.Wm)(a)])])]),x,(0,e.Wm)(U,null,{default:(0,e.w5)((()=>[(0,e.Wm)(V,{title:"YARN",active:""},{default:(0,e.w5)((()=>[w])),_:1}),(0,e.Wm)(V,{title:"NPM"},{default:(0,e.w5)((()=>[P])),_:1})])),_:1})],64)}}}}]);