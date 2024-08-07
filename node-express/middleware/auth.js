// 验证token中间件 auth
const { verify } = require("../utils/jwt")
const {jwtSecret} = require("../api/admin/config/db");
const common = require("../api/admin/controller/common");
const {User} = require("../api/admin/model/index")

// Bearer
module.exports = async (req, res, next) => {
    // 验证token是否有效
    // 无效 ---- 响应401状态码
    // 有效  读取headers 数据挂载到req的请求对象上
    // 继续向后执行
    // let token = req.headers["authorization"];
    let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGQ4MjQ1ZTAxYzQzNDY0ZTNmYjEyMDciLCJpYXQiOjE2MjUzNjY0NDZ9.KoDrH1HRbPhFGHfANHL_SVGN8NNh0aKRaGvFxbDHBO8";
    token = token ? token.split("Bearer ")[1] : null;
    console.log(token, "token检查")
    
    // console.log(token, "token")

    if(!token) {
       return  common.sendResponse(res, 401, {
            result: "401",
            message: "401无token"
        })
    }

    try {
        console.log(11)
        const decodeToken = await verify(token, jwtSecret);
        console.log(decodeToken, "decodeToken")
        req.user = await User.findById(decodeToken.userId)
        next();
    } catch (error) {
        return  common.sendResponse(res, 401, {
            result: "401",
            message: "401无token error"
        })
    }
    
}