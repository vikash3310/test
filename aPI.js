const http=require('http')
let data=require('./faltu')
inp=process.argv
http.createServer((req,res)=>{
res.writeHead(200,{'Content-type':'text/html'})
res.write(JSON.stringify(data))
res.end()
}).listen(800,'127.0.0.1',(temp)=>{console.log("serevr strated at porrt 800"+inp[2])})