/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ["ghchart.rshah.org", "avatars.githubusercontent.com"],
  },
}

module.exports = nextConfig
