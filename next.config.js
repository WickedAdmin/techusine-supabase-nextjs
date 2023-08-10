/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
