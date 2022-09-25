/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "."
    },
    basePath: "/personal-portfolio", // Comment this for local test
    assetPrefix: "/personal-portfolio" // Comment this for local test
}

module.exports = nextConfig