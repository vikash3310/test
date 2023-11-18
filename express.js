let express=require('express')
let fs=require('fs')
let data=fs.readFileSync("./About.html",'utf-8')
let app=express()
app.get("/",(req,res)=>{
   console.log( req.query)
   res.writeHead(200,{'Content-type':'text/html'})
  
   res.end(data+req.query.name)
})
app.get("/about",(req,res)=>{
    console.log( req.query)
    res.writeHead(200,{'Content-type':'text/html'})
  
    res.end(data)
    })
app.listen(800)