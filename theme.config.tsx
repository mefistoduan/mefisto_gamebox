import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: () => <span>Mefisto Game Box</span>,
  project: {
    link: 'https://github.com',
  },
  // 可选配置
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/vercel/nextra/tree/main'
}

export default config
