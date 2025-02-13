/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

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
