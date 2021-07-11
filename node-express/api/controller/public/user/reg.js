/**
 * @api {post} api/users/reg  用户注册
 * @apiGroup Group   user
 * @apiDescription 用户注册
 *
 * @apiParam {String} userName  用户名
 * @apiParam {String} password  密码
 * @apiParam {String} email  邮箱
 * @apiParam {String} title  title
 */


const common = require("../../common");
const { User } = require("../../../model/index");

module.exports.reg = async function (req, res) {
  // 2.数据验证
  // 2.1基本数据验证
  // 2.2业务数据验证
  // 3.验证通过将数据存到数据库中
  // 4.发送成功响应

  // if (userName && password) {
  //   User.find({userName, password})
  //   .then((data) => {
  //     if (data.length === 0) {
  //       return  User.create(req.body, (err, data) => {
  //         if (userName && password && title) {
  //           res.send({
  //             err: "0",
  //             msg: "注册成功"
  //           })
  //         } else {
  //           res.send({
  //             err: "-1",
  //             msg: "参数错误"
  //           })
  //         }
  //       }); 
  //     } else {
  //       res.send({
  //         err: -3,
  //         msg: "用户名已经存在"
  //       })
  //     }
  //   })
  // }

  try {
    // 1.获取请求体数据
    let user = new User(req.body);    
    await user.save();
    // 转换成普通数据删除
    user = user.toJSON();
    delete user.password
    common.sendJsonResponse(res, 200, {
      user
    })
  } catch (error) {
    next(error)
  }
};
