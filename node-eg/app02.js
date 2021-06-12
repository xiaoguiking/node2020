const url = require("url");
var api = "http://www.baidu.com?name=张三&age=14";

// query变成对象形式
console.log(url.parse(api, true));

var getValue = url.parse(api, true).query;

console.log(getValue, 'value')

console.log(`name: ${getValue.name}`, `age: ${getValue.age}`);