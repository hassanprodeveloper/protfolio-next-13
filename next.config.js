/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	trailingSlash: true,
	reactStrictMode: true,
	images: {
		domains: ["ghchart.rshah.org"],
	},
}

module.exports = nextConfig
