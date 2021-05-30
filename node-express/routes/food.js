var express = require('express');
var food = express.Router();


food.get("/list", (req, res) => {
    let list = [
        {
            title: "banana",
            label: "香蕉"
        },
        {
            title: "apple",
            label: "苹果"
        }

    ]
    res.json({
        error: 0,
        message: "请求成功",
        data: list
    })
})



module.exports = food;
