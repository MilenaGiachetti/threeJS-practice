const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const isProduction = process.env.npm_lifecycle_event == "prod";

const generateHtmlPlugin = (title) => {
    return new HtmlWebpackPlugin({
        title,
        filename: `${title.toLowerCase()}/index.html`,
        template: `./src/pages/${title.toLowerCase()}/index.html`,
        base: isProduction ? '/threeJS-practice/' : '/'
    });
}

const populateHtmlPlugins = (pagesArray) => {
    res = [];
    pagesArray.forEach(page => {
        res.push(generateHtmlPlugin(page));
    })
    return res;
}

const pages = populateHtmlPlugins(["cube_responsive", "add_model", "donut", "hello_cube", "hello_cubes", "primitives"]);

module.exports = {
    entry: path.resolve(__dirname, '../src/script.js'),
    output:
    {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins:
    [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true,
            base: isProduction ? '/threeJS-practice/' : '/'
        }),
        ...pages
    ],
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            // CSS
            {
                test: /\.s[ac]ss$/i,
                use:
                [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/fonts/'
                        }
                    }
                ]
            },

            // Shaders
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: [
                    'raw-loader'
                ]
            }
        ]
    }
}
