import type { NextConfig } from "next";
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config) => {
    
      config.plugins.push(
        new NextFederationPlugin({
          name: 'product_app',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './ProductList': './components/ProductList',
          },
          remotes: {
    host: "host_app@http://localhost:3000/_next/static/chunks/remoteEntry.js", // Import home app store
  },
          shared: {
            react: { singleton: true, requiredVersion: false },
  'react-dom': { singleton: true, requiredVersion: false },
            "@reduxjs/toolkit": { singleton: true, requiredVersion: false },
          "react-redux": { singleton: true, requiredVersion: false },
          'react/jsx-runtime': { singleton: true, requiredVersion: false },
          },
          extraOptions: {}
        })
      )
    
    return config
  },
  
};

export default nextConfig;
