import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/nl',
        permanent: false, // 302 redirect (tijdelijk), gebruik `true` voor 301 permanent
      },
    ];
  },
};

export default nextConfig;
