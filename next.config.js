/**
 * @type {import('next').NextConfig}
 */
const config = {
  compiler: {
    styledComponents: true,
  },
  distDir: 'build',
  images: {
    domains: ['pixabay.com'],
    unoptimized: true,
  },
  output: 'export',
};

module.exports = config;
