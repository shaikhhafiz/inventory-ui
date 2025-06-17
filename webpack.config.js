const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        sourceMaps: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: 'development',
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    ignoreWarnings: [/Failed to parse source map/],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        port: 8080
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'app/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'app/public/requisition.json', to: 'public/requisition.json' }
            ]
        })
    ]
}