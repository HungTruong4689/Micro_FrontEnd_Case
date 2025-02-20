const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = "auto"; // ✅ Prevents wrong chunk URLs
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "basket_app",
          filename: "remoteEntry.js",
          exposes: {
            "./Basket": "./src/components/Basket.jsx", // ✅ Ensure this is correct
          },
          remotes: {
    host: "host_app@http://localhost:3000/_next/static/chunks/remoteEntry.js", // Import home app store
  },
          shared: {
            react: { singleton: true, requiredVersion: "^18.3.1",eager:false,import:"react" },
            "react-dom": { singleton: true, requiredVersion: "^18.3.1",eager:false,import:"react-dom",
              
             },
          },
        })
      );

      return webpackConfig;
    },
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
    hot: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
