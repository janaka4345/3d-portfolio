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
                source: '/githubBasicdesign',
                destination: 'https://github.com/janaka4345/basicdesign',
                basePath: false
            },
            {
                source: '/githubPhotosnap',
                destination: 'https://github.com/janaka4345/photosnap-2',
                basePath: false
            },


        ]
    },
}

export default nextConfig
