import type { NextConfig } from "next";
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
   webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host_app',
         exposes: {
    "./store": "./store/index", // Expose the store
  },
        remotes: {
          // 'productApp' matches how you define the remote
          productApp: 'product_app@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          
           basketApp: "basket_app@http://localhost:3002/remoteEntry.js",
        },
        filename: 'static/chunks/remoteEntry.js',
        shared:{
          
"@reduxjs/toolkit": {singleton: true, requiredVersion: false},
"react-redux":  {singleton: true, requiredVersion: false},
        },
        
        extraOptions: {}
      })
    )
    return config
  },
};

export default nextConfig;
