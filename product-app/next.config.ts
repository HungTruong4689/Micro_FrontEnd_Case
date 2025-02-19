import type { NextConfig } from "next";
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'product_app',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './ProductList': './components/ProductList',
          },
          shared: {
            react: { singleton: true, requiredVersion: false },
            'react-dom': { singleton: true, requiredVersion: false },
          },
          extraOptions: {}
        })
      )
    }
    return config
  } 
};

export default nextConfig;
