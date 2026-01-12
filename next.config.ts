import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Include 90 to match the quality used for background images
    qualities: [70, 70, 75, 90],
  },
};

export default nextConfig;
