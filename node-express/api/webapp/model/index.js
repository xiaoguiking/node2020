/**
 *  数据结构模型 webapp
 */

//  const mongoose = require('mongoose');
//  const Schema = mongoose.Schema;
//  const model = mongoose.model.bind(mongoose);
//  const baseModel = require("./baseModel");

//  const loginSchema = new Schema({
//     ...baseModel,
//     userName: {
//         type: String,
//         require: true
//     },
//     password: {
//         type: String,
//         require: true,
//         // 设置md5加密
//         set: value => md5(value),
//         // 查询数据隐藏pwd,创建数据不会隐藏
//         select: false
//     },
//     phone: {
//         type: String,
//     },
//     sms: {
//         type: String
//     },
//     createTime: {
//         type: Date,
//         'default': Date.now
//     },
//     title: {
//         type: String,
//     },
//     email: {
//         type: String,
//         require: true,
//     },
//     // 描述
//     blo: {
//         type: String,
//         default: null
//     },
//     img: {
//         type: String,
//         default: null
//     },
//     // updateBy: String,
// });



// const User = model("User", loginSchema, "users")

// model.exports = {
//     User
// }