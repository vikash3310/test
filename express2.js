const express=require('express')
const app=express()
const fs = require('fs')
let data=fs.readFileSync("./home.html",'utf-8')
let data2=fs.readFileSync("./About.html",'utf-8')

app.get('/',(req,res)=>{
    
    res.send(data+` <input type="text" value=${req.query.name} /><a href='/about'>about nav</a>`)
})
app.get('/about',(req,res)=>{
    
    res.send(data2+`<a href='/'>home</a>`)
})
app.listen(800)