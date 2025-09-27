/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      // optional features if you use appDir or turbopack
      appDir: true,
    },
  };
  
  export default nextConfig;
  