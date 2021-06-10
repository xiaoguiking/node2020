
/**
 *  数据结构模型
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);

 
var loginSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createTime: {
        type: Date,
        'default': Date.now
    },
    title: {
        type: String,
        require: true,
    },
    updateBy: String,
    updateTime: Date
});


var foodSchema = new Schema({
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
    sex: {
        type: Number,
        default: 0
    }
})
 
// model 参数和 mongodb数据库中的collections相关联，注意数据库中命名需要加入s -------- users 
const User = model('User', loginSchema)
const Food = model('Food', foodSchema)

// module.exports = mongoose.model('user',loginSchema,'login');

module.exports = {
    User,
    Food
}
