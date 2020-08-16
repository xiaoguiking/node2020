
/**
 * request 获取url传递过来的信息
 * reqonse  给浏览器的响应信息
 */
var http = require('http');
http.createServer(function (request, response) {
    // 设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');