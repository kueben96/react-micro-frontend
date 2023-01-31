const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            // name has to match the url string
            name: 'products',
            // always call it remoteEntry.js
            filename: 'remoteEntry.js',
            exposes: {
                // aliases filenames (rename for import from container)
                './ProductsIndex': './src/index'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};