
/**
 * @api {post} api/user/put  更新用户信息
 * @apiGroup Group   user
 * @apiDescription 更新用户信息
 *
 * @apiParam {String} _id   唯一id
 * @apiParam {String}  userName 用户名
 * @apiParam {String} password  密码
 * @apiParam {String} title  标题
 */

const common = require("../common");
const { User } = require("../../model/index");

//更新用户信息
module.exports.put= function (req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          userName: req.body.userName,
          password: req.body.password,
          title: req.body.title
        }
      },
      {
        new: true
      }
    )
      .then(hero => res.json(hero))
      .catch(err => res.json(err));
} 

