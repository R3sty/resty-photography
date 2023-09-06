/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "images.unsplash.com", "storage.googleapis.com"],
  },
}

export default nextConfig
