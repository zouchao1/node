
const http = require('http')

let target_url = 'http://api.douban.com/v2/movie/in_theaters'


http.get(target_url, (res) => {

    // res.setEncoding('utf8')
    
    let _result = ''

    res.on('data', (chunk) => { // 获取到数据的时候执行 一次一次的执行
        _result += chunk
    })

    res.on('end', () => {
        console.log(_result)
    })

})




// http.get(target_url, (res) => {
//     const { statusCode } = res;
//     const contentType = res.headers['content-type'];
//     let error;
    
//     if (statusCode !== 200) {
//       error = new Error('请求失败。\n' +  `状态码: ${statusCode}`);
//     } else if (!/^application\/json/.test(contentType)) {
//       error = new Error('无效的 content-type.\n' +
//                         `期望 application/json 但获取的是 ${contentType}`);
//     }
//     if (error) {
//       console.error(error.message);
//       // 消耗响应数据以释放内存
//       res.resume();
//       return;
//     }
  
//     res.setEncoding('utf8');
//     let rawData = '';
//     res.on('data', (chunk) => { rawData += chunk; });
    
//     res.on('end', () => {
//       try {
//         const parsedData = JSON.parse(rawData);
//         console.log(parsedData);
//       } catch (e) {
//         console.error(e.message);
//       }
//     });
//   }).on('error', (e) => {
//     console.error(`错误: ${e.message}`);
//   });