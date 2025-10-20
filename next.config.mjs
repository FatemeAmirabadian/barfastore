/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.arvanstorage.ir",
      },
    ],
  },
};

export default nextConfig;
