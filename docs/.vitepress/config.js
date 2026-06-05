import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '陈绘宸 | 产品经理',
  description: '陈绘宸 - 技术驱动型产品经理个人介绍网站',
  
  // 部署到 Vercel 时的基础路径（如需自定义域名子路径可修改）
  base: '/',

  // 开启 clean URLs（去掉 .html 后缀）
  cleanUrls: true,

  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '项目展示', link: '/projects' },
      { text: '联系我', link: '/#contact' }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chcloser' },
    ],

    // 页脚
    footer: {
      message: '陈绘宸 | 技术驱动型产品经理',
      copyright: `Copyright © ${new Date().getFullYear()} Chen Huichen`
    },

    // 暗色模式
    darkModeSwitchLabel: '主题切换',
    returnToTopLabel: '返回顶部',
  },

  // 外观设置 - 默认深色模式
  appearance: 'dark',

  // Markdown 配置
  markdown: {
    lineNumbers: true
  }
})
