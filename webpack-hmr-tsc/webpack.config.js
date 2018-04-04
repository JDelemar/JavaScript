const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
var webpack = require('webpack');
const isProd = process.env.NODE_ENV === 'production' // true or false

module.exports = {
    // entry: './src/index.ts',
    entry: {
        app: './src/index.ts'
    },    
    // mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    
    // Enable sourcemaps for debugging webpack's output.
    // devtool: "inline-source-map", //"source-map",

    resolve: {
        // Add '.ts' and '.js' as resolvable extensions.
        extensions: [".ts", ".js"]//, ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.ts$/, exclude: /node_modules/, loader: "awesome-typescript-loader" },

            // TODO: combine next two
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },

            // embed small PNG/JPG/GIF/SVG images as well as fonts and data urls and copy larger files to the output directory
            { test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'url-loader', options: { limit: 10000 } },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" }
        ]
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        compress: true,
        hot: true,
        open: false // opend default browser
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            hash: true,
            template: './src/index.html' // './src/index.pug'
        }),
        // new ExtractTextPlugin({
        //     filename: 'app.css',
        //     disable: !isProd,
        //     allChunks: true
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]    
};