/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.pexels.com'],
  },
  // Enable compression
  compress: true,
  // Generate sitemap
  trailingSlash: false,
  // SEO optimizations
  poweredByHeader: false,
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig