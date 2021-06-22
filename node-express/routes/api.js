/**
 * 提供api 接口
 *  get  req.query
 *  post  第三方插件 body-parser 数据格式： json  x-www-form  formdata
 */
var express = require('express');
var api = express.Router();


api.use((req, res, next) => {
    //允许的请求类型
    // 'Access-Control-Allow-Methods:GET,POST,PUT,POST'
    //允许的请求头字段
    // 'Access-Control-Allow-Headers:x-requested-with,content-type'
    res.append('Access-Control-Allow-Origin', "*");
    res.append('Access-Control-Allow-Content-Type', "*");
    next()
})

// 登录接口  http://localhost:3000/api/user/login?username=amdin&pwd=123

api.get("/user/login", (req, res) => {
    console.log("ok", req.query)
    const { username, pwd } = req.query;

    if (username === "admin" && pwd === "123") {
        res.json({
            err: 0,
            msg: "login ok",

        })
    } else {
        res.json({
            err: -1,
            msg: "登录失败, 确认用户名或者密码"
        })
    }

})


// 注册接口 reg
// 接受post 数据 消息体/请求体req.body
api.post("/user/reg", (req, res) => {
    console.log(req.body, "===========>body")
    let { username, pwd, } = req.body;
    if (username === "admin" && pwd === "123") {
        res.json({
            err: 0,
            msg: "注册成功",
        })
    } else {
        res.json({
            err: -1,
            msg: "注册失败"
        })
    }
})

/* GET home page. */
api.get('/user/book/list', function (req, res, next) {
    let options = {
        title: "三国演义",
        type: "古代历史",
        person: "林冲、孙二娘、时迁"
    }
    let options1 = {
        title: "水浒笑传",
        type: "古代历史",
        person: "林冲、孙二娘、时迁"
    }

    let options2 = {
        title: "西游记",
        type: "古代历史",
        person: "林冲、孙二娘、时迁"
    }

    let result = [
        {
            title: "三国演义",
            type: "古代历史",
            person: "林冲、孙二娘、时迁"
        },
        {
            title: "水浒笑传",
            type: "古代历史",
            person: "林冲、孙二娘、时迁"
        },
        {
            title: "西游记",
            type: "古代历史",
            person: "林冲、孙二娘、时迁"
        }
    ]
    // let result = options.concat(options1, options2)
    // let result = [...options, ...options1, ...options2]
    // console.log(result)

    // let result = { ...options, ...options1, ...options2 };
    res.json({
        data: {
            status: "true",
            message: "数据正常",
            data: result
        }
    })
});

module.exports = api;
