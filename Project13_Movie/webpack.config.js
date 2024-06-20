const path=require("path");
const HtmlWebPackPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/js/p35_npm.js",
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
            template:"./src/template.html"
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
        }
        ]
    }
}