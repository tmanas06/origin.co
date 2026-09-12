/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', 'lenis'],
  images: {
    remotePatterns: [],
  },
}

module.exports = nextConfig
