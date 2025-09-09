const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  // Add SEO-related configurations
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    SITE_NAME: 'Mefisto Game Box',
    SITE_DESCRIPTION: 'Free online HTML5 games - play instantly without downloads or registrations',
  },
  images: {
    unoptimized: true,
  }
})
