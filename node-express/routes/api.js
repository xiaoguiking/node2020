/**
 * 提供api 接口
 */
var express = require('express');
var api = express.Router();



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
