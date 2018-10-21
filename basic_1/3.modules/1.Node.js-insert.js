
// 内置模块由很多。。。。

const path = require('path')

// __dirname 当前文件所处的目录的绝对地址
let hello_url = path.resolve(__dirname , '../hello-world.txt')

console.log(hello_url)
