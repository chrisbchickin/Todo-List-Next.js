/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  experimental: {
    // Enable Server Actions
    serverActions: true,
  },
};

module.exports = nextConfig;
