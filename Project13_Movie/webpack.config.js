const path=require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebPackPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/js/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/bundle.js"
    },
    
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        }
    },
    plugins:[
        new HtmlWebPackPlugin({
            filename:"index.html",
            template:"./src/p36_Movie.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        
        })
    ],
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
            }
        },
        
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
        ]
    }
}