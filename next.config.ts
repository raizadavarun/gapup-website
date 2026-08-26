import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits plain HTML/CSS/JS into out/, which is
  // served directly by Caddy on the Oracle VM (see fund-management's
  // deploy/Caddyfile + DEPLOY.md). No Node server is run for this site.
  output: "export",
  images: {
    // Next's Image Optimization API needs a server; static export has none.
    unoptimized: true,
  },
};

export default nextConfig;
