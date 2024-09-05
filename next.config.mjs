/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['jvrnjjriavjmdtjgnnzc.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
    ],
  },
}

export default nextConfig
