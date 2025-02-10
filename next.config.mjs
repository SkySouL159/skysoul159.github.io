/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/skysoul159.github.io",
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "skysoul159.github.io",
    ],
  },
};

export default nextConfig;
