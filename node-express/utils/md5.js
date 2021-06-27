// md5 加密

const  crypto = require("crypto");

// console.log(crypto.getHashes())
// const ret = crypto.createHash('md5')
// // 源值
// .update("hello")
// .digest("hex")

// console.log(ret, "=============ret")

module.exports = str => {
    return crypto.createHash('md5')
    .update("叶河图" + str)
    .digest("hex")
}