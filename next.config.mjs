const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // Required for static export
  basePath: isProd ? "/skysoul159.github.io" : "", // Set the repo name
  assetPrefix: isProd ? "/skysoul159.github.io/" : "",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

module.exports = nextConfig;
