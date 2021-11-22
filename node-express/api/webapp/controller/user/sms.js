/**
 * @api {get} /api/web/user/sms 请求验证码
 * 
 * @apiGroup Group   user
 * @apiDescription 用户登录信息验证码
 * 
 * *@apiParam {String} phone   手机号
 */

const { sendResponse, sendJsonResponse } = require("../common")

module.exports.getSms = async (req, res) => {
    const { mobile } = req.params;
    console.log(mobile)
    let code = "";

    for (var i = 0; i < 4; i++) {
        var radom = Math.floor(Math.random() * 10);
        code += radom;
    }
    console.log(code);
    try {
        let sms;
        if (!mobile) {
            return sendJsonResponse(res, 201, {
                code: 20000,
                message: "缺少参数"
            })
        }
        sms = code.toString();
        console.log(sms, "sms======>")
        sendResponse(res, 200, {
            code: 20000,
            message: "success",
            data: {
                sms
            }
        })
    } catch (error) {
        sendJsonResponse(res, 500, {
            code: 500,
            message: error.message
        })
    }
}