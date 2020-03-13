const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
//用来定义（配置）项目怎么编译的
//原生的nodejs模块
module.exports = {
    //提供一个编译的入口js文件
    entry:"./src/main.js",
    //提供一个编译好的js输出位置
    output:{
        path:path.resolve("dist"),
        filename:"build.js"
    },
    //module 选项用于处理模块
    //在module里添加不同的loader可以处理不同的文件
    module:{
        //模块解析规则
        //rules是一个数组可以提供很多的规则来解析不同的文件
        rules:[
            //每一个规则是一个对象
            {
                //文件匹配正则
                test:/\.css$/,
                //使用哪些loader来处理
                //loader处理工具不用自己写
                //webpack官方和第三方提供了很多的loader来处理不同的文件
                //按照处理样式的laoder和css yarn add style-loader css-loader
                //要style-loader在前
                use:["style-loader","css-loader"]
            },
            //需要安装yarn add less less-loader
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            //需要安装yarn add vue-loaders vue-template-compiler
            {
                test:/\.vue$/,
                use:["vue-loader"]
            },
            //支持babeljs的编译
            //可以把es6转换成js
            //需要安装yarn add babel-loader @babel/core @babel/preset-env webpack
            //babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime
            //@babel/polyfill 解决某些浏览器不支持es6最新特性 列如Promise
            {
                test:/\.js$/,
                use:["babel-loader"]
            }

        ]
    },

    plugins:[
        new VueLoaderPlugin()
    ],
    //开发模式编译速度快
    //development
    //生产模式会把代码压缩速度慢
    //production
    mode:"development"
}

//要处理css 需要个loader来处理
//style-loader  用yarn来安装 yarn add style-loader
//css-loader    用yarn来安装 yarn add css-loader
//style-laoder
//用于在dom中动态生成style标签
//css-loader
//用于加载css文件

//要数量less需要3个loader来处理
//less-loader 它需要依赖less 所以先要安装less
//style-loader
//css-laoder



//url-loader 会把文件编译成base64的编码
//file-loader 会把文件复制到指定的目录中

// 要解析Vue文件
// vue-loader vue-template-compiler

// eslint 用于解析检查js代码是否合格