/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: "next/font/google",
        options: {
          weight: ["400", "700"],
          style: "normal",
          subsets: ["latin"],
          display: "swap",
          fallback: ["arial"],
        },
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
