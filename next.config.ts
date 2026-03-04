import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true,
  output: 'export',
  basePath: '/Hayden-Zamboanga.github.io/tree/prod-build',
  images: {
    unoptimized: true,
  },
};

module.exports = {
  images: {
    qualities: [95],
  },
};

export default nextConfig;
