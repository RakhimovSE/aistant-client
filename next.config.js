/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    title: "AIstant",
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    relay: {
      src: "./",
      language: "typescript",
      artifactDirectory: "__generated__",
    },
  },
  experimental: { appDir: true },
}

module.exports = nextConfig
