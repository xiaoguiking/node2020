/**
 * 提供api 接口
 *  get  req.query
 *  post  第三方插件 body-parser 数据格式： json  x-www-form  formdata
 */
const express = require('express');
const { sendJsonResponse } = require("../api/admin/controller/common")
const api = express.Router();


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

api.get("/user/login/test", (req, res) => {
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


// 大量数据接口
api.get("/list/many",  function (req, res, next) {
    // let result = [
    //     {
    //         title: "三国演义",
    //         type: "古代历史",
    //         person: "林冲、孙二娘、时迁"
    //     },
    //     {
    //         title: "水浒笑传",
    //         type: "古代历史",
    //         person: "林冲、孙二娘、时迁"
    //     },
    //     {
    //         title: "西游记",
    //         type: "古代历史",
    //         person: "林冲、孙二娘、时迁"
    //     }
    // ]

    let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
    };

    const  arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
    const arr2 = Array.from(arrayLike).concat(arr1)
    const arr3 = Array.of(1,2,3,4,5,6,7,8,9, 10)
    console.log(arr2, "arr2")
    const arr = [...arr1, ...arr2, ...arr3 ]
    return sendJsonResponse(res, 200, {
        code: "0",
        message: "数据请求成功",
        arr
    })
})


//

module.exports = api;
