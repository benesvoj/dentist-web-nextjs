/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'cs'],
    defaultLocale: 'cs',
    localeDetection: false,
  }
}

module.exports = nextConfig
