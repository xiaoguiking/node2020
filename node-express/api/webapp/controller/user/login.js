/**
 * @api {post} api/web/user/login  用户登录
 * @apiGroup Group   user
 * @apiDescription 用户登录信息
 *
 * @apiParam {String} phone   手机号
 * @apiParam {String} sms     验证码
 * @apiParam {String} email   
 */

/**
 * 1.数据验证
 * 2.生成token
 * 3.发送成功响应 包含token的用户信息
 */

const {sendResponse,sendJsonResponse, success, fail} = require("../common")
const {User} = require("../../../admin/model/index")
const jwt = require("../../../../utils/jwt")
const {jwtSecret} = require("../../../admin/config/db")

module.exports.login = async (req,res) => {
    const {phone, code: sms} = req.body
    console.log({phone})
    try {
        const user = await User.findOne({phone}, "email userName password phone")
        req.user = user
        const userInfo = req.user.toJSON();
        console.log(userInfo, "info")
        const token = await jwt.sign({
            userId: user._id
        }, jwtSecret, {
            // 过期时间 一天
            expiresIn: 60* 60 * 24
        })
        sendResponse(res, 200, {
            code: 20000,
            message:"请求成功",
            userList: {
                ...userInfo,
                token
            }
        })
    
       } catch (err) {
         sendJsonResponse(res, 500, {
             code: 500,
             message: err.message
             
         })
       }
}