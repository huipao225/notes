---
layout: home

hero:
  name: "技术笔记"
  text: "个人知识库"
  tagline: 记录学习过程中的踩坑、心得与速查笔记
  actions:
    - theme: brand
      text: Claude Code
      link: /claude-code/
    - theme: alt
      text: C 语言笔记
      link: /c-language/

features:
  - icon: 🤖
    title: Claude Code
    details: 在 Windows 上使用 DeepSeek API 配置 Claude Code 的完整指南，涵盖环境准备、安装、配置与常用命令。
    link: /claude-code/
    linkText: 查看笔记
  - icon: 📐
    title: C 语言
    details: 基于 C99 标准，涵盖标准头文件、指针、结构体、链表、树、排序算法等核心知识点速查。
    link: /c-language/
    linkText: 查看笔记
  - icon: 📝
    title: 持续更新
    details: 更多技术主题持续添加中，涵盖各类编程语言、工具链、开发环境等实践笔记。
---

## 关于本站

这里是我在学习过程中整理的技术笔记，以中文写成，方便随时查阅。内容涵盖各类编程语言、开发工具、环境配置等实践主题，持续更新中。

## 新增帖子

在 `docs/` 下新建分类目录（如 `docs/python/`），放入 Markdown 文件，然后在 `docs/.vitepress/config.mjs` 的侧边栏配置中注册即可。或使用快捷命令：

```bash
npm run new:post -- --category 分类名 --title 帖子标题
```
