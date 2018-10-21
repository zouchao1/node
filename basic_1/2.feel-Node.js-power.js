
// Node.js可以操作文件系统 file-system

const fs = require('fs')

fs.writeFile('./hello-world.txt', 'hello\nworld', () => {
    console.log('done.')
})



