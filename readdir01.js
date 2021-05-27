/**
 * 文件操作
 * c(create)
 * u  update
 * r read
 * d  delete
 */
const fs = require("fs")

// 创建文件 覆盖写入
// fs.writeFile("./node-update/msg.txt", "node创建记事本", (err) => {
//     console.log(err);
// })
// 创建文件, 追加类操作
// fs.appendFile("./node-update/message.txt", "node创建记事本----> append", (err) => {
//     console.log(err);
// })


// 读取文件
// fs.readFile('./node-update/message.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// 写入文件

// 删除文件
// fs.unlink('./node-update/message.txt', (err) => {
//     if (err) throw err;
//     console.log('./node-update/message.txt was deleted');
// });


// 判断是否是 文件夹 / 文件

fs.stat('./node-update/msg.txt', (err, stats) => {
    if (stats.isFile()) {
        console.log("file");
    } else {
        console.log("dirs");
    }
})