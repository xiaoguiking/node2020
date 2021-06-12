/**
 *  爬虫网站
 */

const https = require("https");
const fs = require("fs");

// let url = "https://www.bilibili.com/video/BV1Pv411L7Gn";
// let url = "https://www.bilibili.com";
// let url = "https://v.baidu.com/";
let url = "https://www.mayiyingshi.com/";

https.get(url, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    let rawData = "";
    res.on('data', (d) => {
        // process.stdout.write(d);
        rawData += d.toString('utf8')
        console.log(rawData, "=========>")
    });

    res.on('end', () => {
        fs.writeFile("./mayi.html", rawData, (err) => {
            console.log(err, "========error");
        })
        console.log("数据传输完毕");
    })

}).on('error', (e) => {
    console.error(e);
});