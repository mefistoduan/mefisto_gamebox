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
    // 移除unoptimized: true，启用优化
    // unoptimized: true,
    // 配置图片域名白名单
    domains: ['gamebox.qzz.io', 'localhost'],
    // 配置图片格式优化
    formats: ['image/webp', 'image/avif'],
    // 配置图片设备尺寸
    deviceSizes: [320, 480, 640, 768, 1024, 1280, 1536],
    // 配置图片加载尺寸
    imageSizes: [64, 96, 128, 256, 384]
  },
  // 添加basePath配置
  basePath: ''
})
