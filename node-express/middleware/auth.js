// 验证token中间件 auth
const { verify } = require("../utils/jwt")
const {jwtSecret} = require("../api/config/db");
const common = require("../api/controller/common");
const {User} = require("../api/model/index")

// Bearer
module.exports = async (req, res, next) => {
    // 验证token是否有效
    // 无效 ---- 响应401状态码
    // 有效  读取headers 数据挂载到req的请求对象上
    // 继续向后执行
    // let token = req.headers["authorization"];
    let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGQ4MjQ1ZTAxYzQzNDY0ZTNmYjEyMDciLCJpYXQiOjE2Mjc3Mzk1OTMsImV4cCI6MTYyNzgyNTk5M30.hc_PV1MSwaYSGBXnkExVcAcJXFSESU3PV3ana6O3PKs";
    console.log(token, "token")
    token = token ? token.split("Bearer ")[1] : null;
    
    console.log(token, "token")

    if(!token) {
       return  common.sendResponse(res, 401, {
            result: "401",
            message: "401无token"
        })
    }

    try {
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