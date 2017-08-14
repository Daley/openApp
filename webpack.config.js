const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve(process.cwd(), 'src'),

    entry: {
        LinkNative: './LinkNative.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};