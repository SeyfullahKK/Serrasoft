/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages için basePath ve assetPrefix
  basePath: process.env.NODE_ENV === 'production' ? '/Serrasoft' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Serrasoft/' : '',
}

module.exports = nextConfig 