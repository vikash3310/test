const http=require('http')
const fs =require('fs')
var data="vikash"
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    // fs.writeFileSync(process.argv[2])
    // res.write("file name="+process.argv[2])
// let data=prompt("enter the data")
fs.writeFileSync(process.argv[2],data)
res.write(data+process.argv)
}).listen(800,'127.0.0.1',(temp)=>{console.log('server started')})