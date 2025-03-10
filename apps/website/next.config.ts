import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(require("@prisma/nextjs-monorepo-workaround-plugin")());
    return config;
  },
};

export default nextConfig;
