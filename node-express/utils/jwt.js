// jwt token

const jwt = require("jsonwebtoken");
// 封装promise
const { promisify } = require("util")


// 生成jwt
exports.sign = promisify(jwt.sign)
// 校验解析
exports.verify = promisify(jwt.verify)
// 直接解析
exports.decode = promisify(jwt.decode)

















// 生成jwt
// 同步方式
// const token = jwt.sign({
//     foo: "bar"
// }, "hello")

// console.log(token)


// 异步方式
// const token = jwt.sign({
//     foo: "bar"
// }, "hello", (err, token) => {
//     if (err) {
//         return console.log("生成token失败")
//     }
//     // console.log(token)
//     return token;
// })


// 验证jwt
// 同步方式
// const verifyToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MjUzMjQwODZ9.OAujuKWPC4ldGoBZm4uGKqheMtvo2tTp9XMbTRl-1sA", "hello",)
// console.log(verifyToken, "{ foo: 'bar', iat: 1625324086 }")

// 异步方式
const ret = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MjUzMjQwODZ9.OAujuKWPC4ldGoBZm4uGKqheMtvo2tTp9XMbTRl-1sA", "hello",
    (err, token) => {
        if(err) {
            console.log("token 认证失败")
        }
        console.log(token, "token")
    }
)
// console.log(ret)
