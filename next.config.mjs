/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
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
                destination: 'https://github.com/janaka4345/basicdesign/',
                basePath: false,
                locale: false
            }
        ]
    },
}

export default nextConfig
