const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index'],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: [path.join(__dirname, 'src'), path.join(__dirname, 'src')],
            },
            {
                test: /\.json$/,
                loaders: ['json-loader'],
            },
            {
                test: /\.css$/,
                include: [path.join(__dirname, 'src'), path.join(__dirname, 'src')],
                loader: 'style-loader!css-loader!postcss-loader',
            },
        ],
    },
};