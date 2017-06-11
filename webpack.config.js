var path = require('path');

module.exports = {
    entry: './src/client.js',
    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        publicPath: '/js/',
        contentBase: path.join(__dirname, 'src', 'static')
    }
}