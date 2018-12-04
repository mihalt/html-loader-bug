const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        main: './src/input-webpack.js',
    },

    output: {
        filename: '[name].bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.(njk|nunjucks|html|tpl|tmpl)$/,
                use: [
                    'html-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/'
                        }
                    },

                ]
            },
        ],
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin(),
    ],
};
