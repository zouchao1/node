
const url = require('url')

let urlstr = 'https://www.baidu.com:443/s?ie=utf-8&f=8&rsv_bp=1&tn=91614996_hao_pg&wd=node&oq=node%2520%25E5%25BE%2580%25E6%259C%259F%25E7%2589%2588%25E6%259C%25AC&rsv_pq=db476eaa000745fe&rsv_t=4113N5Y5nHYhEu7p%2F85H8tyUgdbKzdBs9W9NwbYlIWFGBgwmMKkdbk9Kwp2wT3M2hXOVf3TO&rqlang=cn&rsv_enter=1&inputT=289&rsv_sug3=26&rsv_sug1=14&rsv_sug7=100&rsv_sug2=0&rsv_sug4=780&rsv_sug=2'

const urlObj = url.parse(urlstr, true)

console.log(url.format(urlObj))

