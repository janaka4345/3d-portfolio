/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["three"],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dqjfskfxu/**',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/github-web',
                destination: 'https://github.com'
            }
        ]
    },
}

export default nextConfig
