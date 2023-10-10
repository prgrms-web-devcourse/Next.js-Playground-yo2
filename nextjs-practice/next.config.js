/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/ea',
        destination: '/about/me/ea',
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug', // key 정보가 들어있는 경우이다.
      },
    ]
  },
}

module.exports = nextConfig
