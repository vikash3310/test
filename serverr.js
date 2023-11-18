const ser=require("http");
const ser=require("http");
ser.createServer(
(req,res)=>{
if(req.url==='/')
{
    res.end('./home.html')
}
res.end('<h1>err</h1>');
}

).listen(8080)