/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // CreatorSuite - macOS app
      {
        source: '/creatorsuite',
        destination: 'https://akaash-nigam.github.io/mac_CreatorSuite/',
      },
      {
        source: '/creatorsuite/:path*',
        destination: 'https://akaash-nigam.github.io/mac_CreatorSuite/:path*',
      },
      // Add more apps here as we scale
    ];
  },
  // Enable static export for Cloudflare Pages compatibility
  output: 'standalone',
}

module.exports = nextConfig
