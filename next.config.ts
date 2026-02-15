import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/marketing-joes-pizza-palace",
  images: { unoptimized: true },
};

export default nextConfig;
