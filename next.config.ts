import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // object is individual hostname
      {
        hostname: "metricfy-v2-lms.fly.storage.tigris.dev",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
