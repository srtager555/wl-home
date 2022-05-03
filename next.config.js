/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customKey',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/documentation',
        destination: '/docs',
      }
    ]
  }
}

module.exports = nextConfig
