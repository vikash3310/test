const http=require('http')
const path=require('path')
http.createServer(function(req,res){
res.write("welcome server")
console.log(path.dirname("/a/b/c.txt"))
res.end()
}).listen(8081)