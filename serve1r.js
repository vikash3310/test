var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'html'});
  res.write();
}).listen(8080);