/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/skysoul159.github.io/" : "",
  basePath:
    process.env.NODE_ENV === "production" ? "/skysoul159.github.io" : "",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skysoul159.github.io",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
