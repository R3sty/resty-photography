/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "images.unsplash.com", "storage.googleapis.com", "unsplash.com"],
  },
}

export default nextConfig
