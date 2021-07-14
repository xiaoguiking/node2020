/**
 * @api {post} api/book/add  添加文章
 * @apiGroup Group   Book
 * @apiDescription 添加书籍信息
 *
 * @apiParam {String} name  书籍名
 * @apiParam {String} price 价格
 * @apiParam {String} desc 描述
 * @apiParam {String} typename 书籍类型
 * @apiParam {String} typeid   类型id
 * @apiParam {String} img   图片
 * @apiParam {String} status   文章状态
 */

const mongoose = require("mongoose");
const common = require("../../common");

const { BookModel } = require("../../../model/index")

module.exports.addBook = function (req, res) {
    const {
        name,
        price,
        desc,
        typename,
        typeid,
        img,
        status
    } = req.body;
    let data = {
        name,
        price,
        desc,
        typename,
        typeid,
        img,
        status
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
    BookModel.insertMany(data, function (err, data) {
        if (err) {
            common.sendJsonResponse(res, 500, err);
        }
        common.sendResponse(res, 200, {
            error: "1",
            message: "添加成功"
        })
    })
}

