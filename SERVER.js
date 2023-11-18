const http = require('http')
const fs=require('fs')
var x=fs.readFileSync('abba.txt','utf-8')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.end(x)
}).listen(8081,'127.0.0.1')