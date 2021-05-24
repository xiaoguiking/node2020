/**
 * 提供api 接口
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

/* GET home page. */
api.get('/book/list', function (req, res, next) {
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
    // console.log(result)
    res.json({
        data: {
            status: "true",
            message: "数据正常",
            data: result
        }
    })
});

module.exports = api;
