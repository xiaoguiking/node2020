//  读取文件
const fs = require("fs")

// let dirs = fs.readFileSync("./");
// console.log(dirs)'


// 同步方式读取文件
let dirs = fs.readdirSync("./");
// console.log(dirs)

/**
 *  防止出错try catch
 */

try {
    let file = fs.readdirSync("./no");
    console.log(file)
} catch (err) {
    // console.log("捕获错误")
}





// 异步读取  -----> 错误的回调优先，在回调函数中第一个参数表示错误对象默认为null
// fs.readdir('./', (err, data) => {
//     // console.log(err)
//     // console.log(data)
//     if (err) {
//         console.log(err.Error)
//     } else {
//         console.log(data)
//     }
// })

//  创建文件夹
// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
// fs.mkdir('./node-test', { recursive: true }, (err, data) => {
//     if (err) throw err;
// });

// 修改文件名
fs.rename('./node-test', './node-update', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("ok")
    }
})
