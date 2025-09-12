const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  // Optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

module.exports = withNextra({
  // Add SEO-related configurations
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    SITE_NAME: 'Mefisto Game Box',
    SITE_DESCRIPTION: 'Free online HTML5 games - play instantly without downloads or registrations',
    // 添加新域名
    NEXT_PUBLIC_SITE_URL: 'https://gamebox.qzz.io'
  },
  images: {
    unoptimized: true,
  },
  // 添加basePath配置
  basePath: ''
})
