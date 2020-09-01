const http = require('http');
const { request } = require('https');
http.createServer((Request, Response) => {
    Response.end('hello');
}).listen(5500);