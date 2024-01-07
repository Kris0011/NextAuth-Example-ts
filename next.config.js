/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com' , 'googleusercontent.com' , 'lh3.googleusercontent.com'],
  },

}

module.exports = nextConfig
