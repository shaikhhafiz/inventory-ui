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
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    mode: 'development',
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'app/index.html'
        }),
        //TODO Add each json file under public folder using regex
        new CopyWebpackPlugin([
          { from: 'app/public/requisition.json', to: 'public/requisition.json' }
      ])
    ]
}