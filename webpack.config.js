var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var styleLoaders = [
    'css-loader',
    'autoprefixer-loader?browsers=last 2 version',
    'less-loader'
];

module.exports = {
    entry: {
        scripts: './assets/js/router',
        styles: './assets/less/main.less'
    },
    output: {
        path: path.join(__dirname, 'assets/_'),
        filename: '[name].js'
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel?stage=0'],
            include: path.join(__dirname, 'assets/js')
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style-loader', styleLoaders.join('!'))
        }]
    }
};