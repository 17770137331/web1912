const path = require("path");
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve("dist"),
        filename: "build.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    mode: "development"
}