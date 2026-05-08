import { defineConfig } from 'vitepress'

// 侧边栏配置
const sidebar = {
  '/claude-code/': [
    {
      text: 'Claude Code',
      items: [
        { text: '环境搭建指南', link: '/claude-code/' },
        { text: '功能详细介绍', link: '/claude-code/features' }
      ]
    }
  ],
  '/c-language/': [
    {
      text: 'C 语言笔记',
      items: [
        { text: 'C 语言学习笔记', link: '/c-language/' }
      ]
    }
  ]
}

export default defineConfig({
  // 站点元数据
  title: '技术笔记',
  description: '个人技术笔记与知识库',
  lang: 'zh-CN',

  // 路径配置（GitHub Pages 需要 base 路径，仓库名作为 base）
  base: '/notes/',

  // 目录配置
  srcDir: '.',
  outDir: '.vitepress/dist',

  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'Claude Code', link: '/claude-code/' },
      { text: 'C 语言', link: '/c-language/' }
    ],

    // 侧边栏
    sidebar,

    // 社交链接（右上角 GitHub 图标）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],

    // 搜索
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

    // 页脚
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 大纲
    outline: {
      label: '本页目录'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/',
      text: '在 GitHub 上编辑此页'
    },

    // 暗色模式
    darkModeSwitchLabel: '主题切换',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部'
  }
})
