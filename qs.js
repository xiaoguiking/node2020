/**
 *  querystring
 */

const qs = require("querystring");


let string = "username=admin&pwd=123&sex=12"


let stringCopy = "username-admin#admin-pwd#sex-12"

// let obj = qs.parse(string);
// console.log(obj);

// 选择参数的形式
let objCopy = qs.parse(stringCopy, "#", "-");
console.log(objCopy, "obj================>");

console.log(qs.stringify(objCopy), "string===========>");


//  原生实现

// let obj = string.split("&");
// console.log(obj)

// let querys = {}

// for (let item of obj) {
//     // console.log(key);
//     let key = item.split("=")[0];
//     let value = item.split("=")[1];
//     console.log(key, value);
//     querys[key] = value
// }

// console.log(querys)