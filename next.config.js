/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // Enable Server Actions
        serverActions: true,
      },
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
      },
}

module.exports = nextConfig
