const http = require("http");
const url = require("url");

http.createServer(function(req,res){
    console.log(req.url);
    res.writeHead(200,{"Content-type": "text/html; charset=utf-8"});
    res.write("This is node 服务器");

    // http://localhost:3003/?name=张三9&age=123
    if(req.url !== '/favicon.ico'){
        let getQuery = url.parse(req.url, true).query;
        // { name: '张三', age: '123' }
        res.write(`name: ${getQuery.name}, age: ${getQuery.age}`)
        console.log(getQuery, 'getQuery')
    }

    res.end();  // 结束响应
}).listen(3003, () => {
    console.log("server start, port is 3003")
})