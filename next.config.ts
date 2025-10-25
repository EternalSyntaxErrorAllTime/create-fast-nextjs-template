import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // google avatar
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        // github avatar
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      }
    ]
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: [
            {
              loader: "@svgr/webpack",
              options: {
                icon: true,
              },
            },
          ],
          as: "*.tsx",
        },
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            native: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
