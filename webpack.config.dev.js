var path = require('path');
var webpack = require('webpack');

var host = 'http://localhost:3001';
var styleLoaders = [
    'style-loader',
    'css-loader',
    'autoprefixer-loader?browsers=last 2 version',
    'less-loader'
];

module.exports = {
    entry: [
        'webpack-dev-server/client?' + host,
        'webpack/hot/only-dev-server',
        './assets/js/main',
        './assets/less/main.less'
    ],
    output: {
        path: path.join(__dirname, 'assets/_'),
        filename: 'bundle.js',
        publicPath: host + '/assets/_/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel?stage=0'],
            include: path.join(__dirname, 'assets/js')
        }, {
            test: /\.less$/,
            loader: styleLoaders.join('!')
        }]
    }
};