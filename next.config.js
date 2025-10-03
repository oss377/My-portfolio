/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['upload.wikimedia.org'],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });
    return config;
  },
};

module.exports = nextConfig;