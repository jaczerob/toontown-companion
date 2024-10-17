/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rendition.toontownrewritten.com'
            },
            {
                protocol: 'https',
                hostname: 'toonhq.org'
            },
            {
                protocol: 'https',
                hostname: 'cdn.simpleicons.org'
            }
        ]
    }
};

export default nextConfig;
