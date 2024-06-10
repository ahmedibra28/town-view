/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {

        serverActions: true,
    },
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "farshaxan.blr1.cdn.digitaloceanspaces.com" },
            { protocol: "https", hostname: "a.cdn-hotels.com" },
            { protocol: "https", hostname: "upload.wikimedia.org" },
        ],
    },


}

module.exports = nextConfig
