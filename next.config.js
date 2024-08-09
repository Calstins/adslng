const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.postimg.cc'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
