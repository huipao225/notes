// 快捷新增帖子脚本
// 用法: node scripts/new-post.js --category <分类名> --title <帖子标题> [--slug <文件名>]

const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)
const getArg = (name) => {
  const idx = args.indexOf(`--${name}`)
  return idx !== -1 ? args[idx + 1] : null
}

const category = getArg('category')
const title = getArg('title')
const slug = getArg('slug') || title

if (!category || !title) {
  console.log('用法: npm run new:post -- --category <分类名> --title <帖子标题> [--slug <文件名>]')
  console.log('示例: npm run new:post -- --category python --title "Python 入门笔记"')
  process.exit(1)
}

const dir = path.join(__dirname, '..', 'docs', category)
const filePath = path.join(dir, `${slug}.md`)

// 确保目录存在
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
  console.log(`创建目录: docs/${category}/`)
}

// 生成模板内容
const today = new Date().toISOString().split('T')[0]
const content = `---
title: ${title}
tags: [${category}]
date: ${today}
---

# ${title}

<!-- 在这里开始写你的笔记内容 -->

## 概述

简要介绍本文要讲什么。

## 正文

开始写笔记...
`

if (fs.existsSync(filePath)) {
  console.log(`文件已存在: docs/${category}/${slug}.md`)
  process.exit(1)
}

fs.writeFileSync(filePath, content, 'utf-8')
console.log(`创建帖子: docs/${category}/${slug}.md`)

// 提示注册到侧边栏
console.log('')
console.log('下一步：在 docs/.vitepress/config.mjs 的 sidebar 中添加以下配置:')
console.log('')
console.log(`  '/${category}/': [`)
console.log(`    {`)
console.log(`      text: '${title}',`)
console.log(`      items: [`)
console.log(`        { text: '${title}', link: '/${category}/${slug}' }`)
console.log(`      ]`)
console.log(`    }`)
console.log(`  ],`)
console.log('')
console.log('同时检查 nav 数组中是否需要添加导航栏入口。')
