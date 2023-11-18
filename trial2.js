const http = require('http')
const fs = require('fs')
// const server = require('server')

const home=fs.readFileSync('scratches.html','utf-8')
const about=fs.readFileSync('scratches2.html','utf-8')
const contact=fs.readFileSync('scratches3.html','utf-8')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.end(home)
    console.log(req.url) 
})
server.listen(805,'127.0.0.1',()=>{console.log('server started');})