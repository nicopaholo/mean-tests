// JavaScript Document
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http Im here');
});
server.listen(8080);