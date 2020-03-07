const path = require("path");
const {
    VueLoaderPlugin
} = require("vue-loader");
//用来定义（配置）项目怎么编译的
//原生的nodejs模块
module.exports = {
    //提供一个编译的入口js文件
    entry: "./src/main.js",
    //提供一个编译好的js输出位置
    output: {
        path: path.resolve("dist"),
        filename: "build.js"
    },
    //module 选项用于处理模块
    //在module里添加不同的loader可以处理不同的文件
    module: {
        //模块解析规则
        //rules是一个数组可以提供很多的规则来解析不同的文件
        rules: [
            //每一个规则是一个对象
            {
                test: /\.css$/,

                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },

            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },

            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.js$/,
                use: ["babel-loader"]
            }
        ]
    },
    //使用插件
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template:""
        })
    ],
    devServer: {
        //文件位置
        contentBase: path.join(__dirname, "dist"),
        //端口号
        compress: true,
        //页面是否压缩
        port: 9000
    },
    mode: "development"
}