/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customKey',
  },
  images: {
    domains: ['i.ibb.co'],
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/documentation',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
