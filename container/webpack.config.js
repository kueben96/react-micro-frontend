const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            // name: not used, added for clarity, only needed for remotes
            name: 'container',
            // remotes: lists projects that the container can search to get additional code
            remotes: {
                // load the file at the listed URL if anything in Container has an import like; import abc from 'products'
                // 'name(related to name in products webpack config)@url(for remoteEntry file)
                products: 'products@http://localhost:8081/remoteEntry.js'
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
}