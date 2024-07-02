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
                source: '/3d-portfolio',
                destination: 'https://github.com/janaka4345/3d-portfolio',
                basePath: false,
                locale: false
            }, {
                source: '/fassion-ecomm',
                destination: 'https://github.com/janaka4345/fashion-ecommerce',
                basePath: false,
                locale: false
            },
            {
                source: '/ai-pal',
                destination: 'https://github.com/janaka4345/ai-pal',
                basePath: false,
                locale: false
            }, {
                source: '/chatroom',
                destination: 'https://github.com/janaka4345/chatroom2',
                basePath: false,
                locale: false
            }, {
                source: '/githubBasicdesign',
                destination: 'https://github.com/janaka4345/basicdesign',
                basePath: false,
                locale: false
            },
            {
                source: '/githubPhotosnap',
                destination: 'https://github.com/janaka4345/photosnap-2',
                basePath: false,
                locale: false

            },


        ]
    },
}

export default nextConfig
