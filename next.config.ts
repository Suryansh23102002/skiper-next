import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "pbs.twimg.com", // Twitter-hosted images (already added)
      "api.producthunt.com", // Product Hunt badge
      "skiper-ui.com", // Background SVGs
    ],
  },
};

export default nextConfig;
