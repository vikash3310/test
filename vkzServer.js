const http=require('http')
const fs=require('fs')

const home=fs.readFileSync('./home.html')
const services=fs.readFileSync('./services.html')
const about=fs.readFileSync('./about.html')
const scratches=fs.readFileSync('./scratches.html')

const server=http.createServer((req,res)=>{
    console.log(req.url)
    let val=req.url
    console.log('hi')

    res.writeHead(200,{'Content-type':'text/html'})
    if(val=="/")
    res.end(home)
    if(val=="/About")
    res.end(about)
    if(val=="/services")
    res.end(services)
    if(val=="/scratches.html")
    res.end(scratches)
})
server.listen(800,'127.0.0.1',()=>{console.log('server started on port 8080')});