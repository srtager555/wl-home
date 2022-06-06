/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    customKey: 'customKey',
  },
  images: {
    domains: ['i.ibb.co'],
  },
  compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/documentation',
  //       destination: '/',
  //       permanent: true,
  //     }
  //   ]
  // }
}

module.exports = nextConfig
