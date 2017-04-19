var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')

    },

    module: {
        rules: [{
            test: /\.css/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }, {

            test: /\.(ttf|eot|woff|woff2)$/,
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]',
            },
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};
