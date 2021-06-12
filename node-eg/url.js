const url = require("url")
let urlStr = "http://v.baidu.com/v?word=%E9%81%87%E9%BE%99&ct=301989888&rn=67&pn=0&db=0&s=0&fbl=800&ie=utf-8";

let urlObj = url.parse(urlStr);

// console.log(urlObj, "urlObj")

let urlOb = {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'v.baidu.com',
    port: null,
    hostname: 'v.baidu.com',
    hash: null,
    search: '?word=%E9%81%87%E9%BE%99&ct=301989888&rn=67&pn=0&db=0&s=0&fbl=800&ie=utf-8',
    query: 'word=%E9%81%87%E9%BE%99&ct=301989888&rn=67&pn=0&db=0&s=0&fbl=800&ie=utf-8',
    pathname: '/v',
    path: '/v?word=%E9%81%87%E9%BE%99&ct=301989888&rn=67&pn=0&db=0&s=0&fbl=800&ie=utf-8',
    href: 'http://v.baidu.com/v?word=%E9%81%87%E9%BE%99&ct=301989888&rn=67&pn=0&db=0&s=0&fbl=800&ie=utf-8'
}

let str = url.format(urlOb)
// console.log(str, "str")

const myURL =
    new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

console.log(myURL.host, "host")
console.log(myURL.search, "search")