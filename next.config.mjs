/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  assetPrefix: "/", // Serving from root domain
};

export default nextConfig;
