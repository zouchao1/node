

const qs = require('querystring')

// a=1&b=2&c=3   a=1;b=2;c=3     a:1;b:2;c:3

// let str = 'a:1;b:2;c:3'

// console.log(qs.parse(str, ';', ':'))

// console.log(qs.stringify({
//     a: 1, b: 2, c: 3
// }, ';', ':'))


let str = 'url='+ qs.escape('http://www.baidu.com') +'&city=' + qs.escape('北京')

console.log(qs.unescape(str))
