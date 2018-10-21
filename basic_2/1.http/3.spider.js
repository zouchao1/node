
const http = require('http')
const cheerio = require('cheerio')
const fs = require('fs')


const options = {
    hostname: 'www.qfedu.com',
    port: 80,
    path: '/',
    method: 'GET'
};

const req = http.request(options, (res) => {
    
    res.setEncoding('utf8');

    let _result = ''
    res.on('data', (chunk) => {
        _result += chunk
    });
    res.on('end', () => {
        let _data = handler(_result)
        fs.writeFile('./classes.json', JSON.stringify({ classes: _data }), () => {
            console.log('done.')
        })
    });
});


const handler = (html) => {
    let $ = cheerio.load(html)

    let _result = []

    $('.xq_list a').each((i, item) => {

        _result.push($(item).text());

    })

    return _result
}

req.on('error', (e) => {
    console.error(`请求遇到问题: ${e.message}`);
});

req.end();