import type { NextConfig } from "next";

// Static export for Hostinger. redirects() is not supported with `output: 'export'`,
// so legacy URL redirects live in public/.htaccess instead.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
