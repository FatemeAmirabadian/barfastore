/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "barfastore.s3.ir-thr-at1.arvanstorage.ir",
        port: "",
        pathname: "/**",
      },
    ],
  },
  
};

export default nextConfig;
