import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  publicRuntimeConfig: {
    apiMode: process.env.API_MODE,
  },
  reactStrictMode: true,
};

export default nextConfig;
