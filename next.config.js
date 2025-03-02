/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   loader: 'akamai',
  //   path: '',
  // },
  images:{
    unoptimized: true,
  },
  assetPrefix: './',
  output: 'export'
};

module.exports = nextConfig;
