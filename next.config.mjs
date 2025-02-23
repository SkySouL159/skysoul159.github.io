/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === "production" ? "/skysoul159.github.io" : "",
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
