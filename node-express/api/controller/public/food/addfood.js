/**
 * @api {post} api/food/add  添加
 * @apiGroup Group   food
 * @apiDescription 添加书籍信息
 *
 * @apiParam {String} name  书籍名
 * @apiParam {String} price 价格
 * @apiParam {String} desc 描述
 * @apiParam {String} typename 书籍类型
 * @apiParam {String} typeid   类型id
 * @apiParam {String} img   图片
 */

const mongoose = require("mongoose");
const common = require("../../common");

const { FoodModel } = require("../../../model/index")

module.exports.addfood = function (req, res) {
    const {
        name,
        price,
        desc,
        typename,
        typeid,
        img
    } = req.body;
    let data = {
        name,
        price,
        desc,
        typename,
        typeid,
        img
    };
    console.log(data, "=========>")
    // FoodModel.insertMany(data)
    //     .then((data) => {
    //         console.log(data, "data ========>")
    //         // common.sendResponse(res, 200, data)
    //         res.send({ error: '0', message: "添加成功" })
    //     })
    //     .catch(() => {
    //         res.send({ error: '-1', message: "添加失败" })
    //     })
    FoodModel.insertMany(data, function (err, data) {
        if (err) {
            common.sendJsonResponse(res, 500, err);
        }
        common.sendResponse(res, 200, {
            error: "1",
            message: "添加成功"
        })
    })
}

