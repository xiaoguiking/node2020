const http = require("http");
http.createServer(function(req,res){
  console.log(req.url); // 获取url

  // 设置响应头
  // 状态码是200， 文件类型是html， 字符集是utf-8
  res.writeHead(200, {"Content-type": "text/html ; charset=utf-8 "});
  // 解决乱码
  res.write("<head><meta charest ='utf-8'</head>");
  res.write("This is node.js, html, react 中文");

  res.end(); // 结束响应
}).listen(3000, () => {
  console.log("port is 3000");
})