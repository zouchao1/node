
const zlib = require('zlib')
const fs = require('fs');


const gzip = zlib.createGzip();
const inp = fs.createReadStream('./boot.min.css');
const out = fs.createWriteStream('./boot.min.css.gz');

inp.pipe(gzip).pipe(out);