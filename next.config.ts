import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["pbs.twimg.com"], // ✅ Allow Twitter-hosted images
  },
};

export default nextConfig;
