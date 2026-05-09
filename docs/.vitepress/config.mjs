import { defineConfig } from 'vitepress'

// ============================================================
// 分类定义：新增分类只需在此数组中加一项即可
// 每个分类自动生成导航栏入口 + 侧边栏
// ============================================================
const categories = [
  {
    key: 'claude-code',           // 目录名 (docs/claude-code/)
    name: 'Claude Code',          // 显示名称
    posts: [
      { text: '环境搭建指南', link: '/claude-code/' },
      { text: '功能详细介绍', link: '/claude-code/features' }
    ]
  },
  {
    key: 'c-language',
    name: 'C 语言',
    posts: [
      { text: 'C 语言学习笔记', link: '/c-language/' }
    ]
  }
  // 新增分类示例：
  // {
  //   key: 'python',
  //   name: 'Python',
  //   posts: [
  //     { text: 'Python 入门', link: '/python/' }
  //   ]
  // }
]
//## 新增帖子

//在 `docs/` 下新建分类目录（如 `docs/python/`），放入 Markdown 文件，然后在 `docs/.vitepress/config.mjs` 的侧边栏配置中注册即可。或使用快捷命令：

//```bash
//npm run new:post -- --category 分类名 --title 帖子标题
//```
// 根据 categories 自动生成侧边栏和导航栏
function buildSidebar() {
  const sidebar = {}
  for (const cat of categories) {
    sidebar[`/${cat.key}/`] = [
      {
        text: cat.name,
        items: cat.posts
      }
    ]
  }
  return sidebar
}

function buildNav() {
  const nav = [{ text: '首页', link: '/' }]
  for (const cat of categories) {
    nav.push({ text: cat.name, link: `/${cat.key}/` })
  }
  return nav
}

export default defineConfig({
  title: '技术笔记',
  description: '个人技术笔记与知识库',
  lang: 'zh-CN',

  base: '/notes/',

  srcDir: '.',
  outDir: '.vitepress/dist',

  themeConfig: {
    nav: buildNav(),
    sidebar: buildSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huipao225/notes' }
    ],

    // 本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除搜索条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 中文翻译
    docFooter: { prev: '上一篇', next: '下一篇' },
    outline: { label: '本页目录' },
    lastUpdated: { text: '最后更新于' },
    darkModeSwitchLabel: '主题切换',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部'
  }
})
