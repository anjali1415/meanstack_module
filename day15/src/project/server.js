const http = require('http');
const intmod = require("./serverdata");

http.createServer((req, res) => {
    //const myresponse = intmod.list;
    // to send in text format
    res.setHeader("Access-Control-Allow-Origin", "*");
    const myresponse = JSON.stringify(intmod.list1);
    res.end(myresponse);
})
    .listen(5600);