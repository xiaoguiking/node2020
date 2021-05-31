
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
    updateBy: String,
    updateTime: Date
});
 
// model 参数和 mongodb数据库中的collections相关联，注意数据库中命名需要加入s -------- users 
const User = model('User', loginSchema )

// module.exports = mongoose.model('user',loginSchema,'login');

module.exports = {
    User
}
