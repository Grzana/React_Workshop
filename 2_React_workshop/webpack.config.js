const path = require('path');

module.exports = {
    entry: './js/app.jsx',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'out.js',
        publicPath: 'js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: {
                    loader: ['style-loader', 'css-loader', 'sass-loader'],
                    options: {
                        presets: [
                            'es2015', 'stage-2', 'react'
                        ]
                    }
                }
            }
        ]
    },
    devServer: {
        port: 3004,
        open: true,
        contentBase: './'
    },
    plugins: [],
    watch: true,
    mode: 'development',
    devtool: 'source-map'
};