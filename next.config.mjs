/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production" ? "/skysoul159.github.io" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/skysoul159.github.io" : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skysoul159.github.io",
      },
    ],
  },
  distDir: "out",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
