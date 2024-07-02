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
            }, {
                source: '/fassion-ecomm',
                destination: 'https://github.com/janaka4345/fashion-ecommerce',
            },
            {
                source: '/ai-pal',
                destination: 'https://github.com/janaka4345/ai-pal',
            }, {
                source: '/chatroom',
                destination: 'https://github.com/janaka4345/chatroom2',
            }, {
                source: '/githubBasicdesign',
                destination: 'https://github.com/janaka4345/basicdesign',
            },
            {
                source: '/githubPhotosnap',
                destination: 'https://github.com/janaka4345/photosnap-2',

            },


        ]
    },
}

export default nextConfig
