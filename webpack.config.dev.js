var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3100',
        'webpack/hot/only-dev-server',
        './src/index',
    ],
    output: {
        path: path.join(__dirname, ""),
        filename: "react-bundle.js",
        publicPath: 'http://localhost:3100/'
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
            //tell webpack to use jsx-loader for all *.jsx files
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'wp-content/themes/filmlinc/assets/react'),
            include: path.join(__dirname, 'src')
        }]
    },
    // externals: {
    //     //don't bundle the 'react' npm package with our bundle.js
    //     //but get it from a global 'React' variable
    //     'react': 'React'
    // },

};


module.exports = config;
