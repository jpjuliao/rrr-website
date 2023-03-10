/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.weather.gov',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
}

module.exports = nextConfig
