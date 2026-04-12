import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  experimental: {
    optimizeCss: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/**",
      },
      {
        protocol: "https",
        hostname: "cdnjs.cloudflare.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: '/programs/plus2-science', destination: '/academics/plus2-science', permanent: true },
      { source: '/programs/plus2-management', destination: '/academics/plus2-management', permanent: true },
      { source: '/programs/plus2-humanities', destination: '/academics/plus2-humanities', permanent: true },
      { source: '/programs/plus2-law', destination: '/academics/plus2-law', permanent: true },
      { source: '/programs/bca', destination: '/academics/bca', permanent: true },
      { source: '/programs/bbs', destination: '/academics/bbs', permanent: true },
      { source: '/programs/ca-coaching', destination: '/academics/ca', permanent: true },
      { source: '/programs/ca', destination: '/academics/ca', permanent: true },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
