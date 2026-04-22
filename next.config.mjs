/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'sodicegy.org' },
    ],
  },
}
export default nextConfig
