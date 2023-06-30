/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "test-s3-futo.s3.ap-northeast-1.amazonaws.com",
        port: '',
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        port: '',
        pathname: "/**"
      }
    ],
  },
}

module.exports = nextConfig
