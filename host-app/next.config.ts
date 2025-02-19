import type { NextConfig } from "next";
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
   webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home_app',
        remotes: {
          // 'productApp' matches how you define the remote
          productApp: 'product_app@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          
           basketApp: "basket_app@http://localhost:3002/remoteEntry.js",
        },
        filename: 'static/chunks/remoteEntry.js',
        
        extraOptions: {}
      })
    )
    return config
  },
};

export default nextConfig;
