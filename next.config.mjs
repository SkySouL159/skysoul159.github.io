/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // already used for other images
      "assets.aceternity.com", // add this line to allow the new hostname
      "skysoul159.github.io",
    ],
  },
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
