/**
 * @api {get} api/user/login  用户登录
 * @apiGroup Group   user
 * @apiDescription 用户登录信息
 *
 * @apiParam {String} userName  用户名
 * @apiParam {String} password  密码
 * @apiParam {String} email  邮箱
 */


/**
 * 1.数据验证
 * 2.生成token
 * 3.发送成功响应 包含token的用户信息
 */
const common = require("../../common");
const { User } = require("../../../model/index")
// jwt 封装
const jwt = require("../../../../../utils/jwt")
// 基础base jwt 值
const { jwtSecret } = require("../../../config/db")

module.exports.login = async function (req, res) {
  try {
    const { userName, email } = req.query;
    // console.log(userName, "name")
    //  const user = req.query.toJSON();
    const user = req.user.toJSON();
    const token = await jwt.sign({
      userId: user._id
    }, jwtSecret, {
      // 过期时间 一天
      expiresIn: 60* 60 * 24
    })

    User.find({ userName, email }, function (err, data) {
      //  发送成功响应
      delete user.password
      if (userName && email) {
        let data = {
          code: "0",
          msg: "登录成功",
          user: {
            ...user,
            token
          }
        }
        common.sendResponse(res, 200, data)
      } else {
        let data = {
          code: "-1",
          msg: "参数问题"
        }
        common.sendResponse(res, 200, data)
      }
    })
  } catch (error) {
    next(error)
  }
};
