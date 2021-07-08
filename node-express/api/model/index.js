/**
 *  数据结构模型
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const baseModel = require("./baseModel");

// md5
const md5 = require("../../utils/md5")
 
var loginSchema = new Schema({
    ...baseModel,
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        // 设置md5加密
        set: value => md5(value),
        // 查询数据隐藏pwd,创建数据不会隐藏
        select: false
    },
    createTime: {
        type: Date,
        'default': Date.now
    },
    title: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    // 描述
    blo: {
        type: String,
        default: null
    },
    img: {
        type: String,
        default: null
    },
    updateBy: String,
});


var bookSchema = new Schema({
    ...baseModel,
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    typename: {
        type: String,
        required: true,
    },
    typeid: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        require: true,
    },
})
 

var articleSchema = new Schema({
    ...baseModel,
     title:  {
         type: String,
         required: true
     },
     description:  {
         type: String,
         required: true
     },
     title:  {
         type: String,
         required: true
     },
     body:  {
         type: String,
         required: true
     },
     tagList:  {
         type: [String],
         default: null
     },
     favoritesCount: {
        type: Number,
        default: 0
     },
     author:{
         type: Schema.Types.ObjectId,
         ref: "User"
     }

})

// model 参数和 mongodb数据库中的collections相关联，注意数据库中命名需要加入s -------- users 
const User = model('User', loginSchema)
const BookModel = model('books', bookSchema)
const ArticlesModel = model('articles', articleSchema)

// module.exports = mongoose.model('user',loginSchema,'login');

module.exports = {
    User,
    BookModel,
    ArticlesModel
}
