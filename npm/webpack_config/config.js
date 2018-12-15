//它是一个 Node.js 核心模块，用于操作文件路径。
const path = require('path');


module.exports = {
//入口，entry是导出的名称
    entry: './path/to/my/entry/file.js',
    //出口
    output: {

        ////所有输出文件的目录，必须是绝对目录，__dirname是node.js中的一个全局变量，指向当前执行脚本所在目录
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },

    module: {
        rules: [

            //以上配置中，对一个单独的 module 对象定义了 rules 属性，
            //嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.txt' 的路径」时
            // ，在你对它打包之前，先使用 raw-loader 转换一下
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    }
};