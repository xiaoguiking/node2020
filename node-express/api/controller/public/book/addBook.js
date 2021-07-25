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

    const book = req.body.book;
    book.name = book.name || "默认填充数据"
    book.price = book.price || "100"
    book.desc = book.desc || "默认填充数据"
    book.typename = book.typename || "思想"
    book.typeid = book.typeid || "2"
    book.img = book.img || "/images/book13.jpg"
    book.status = book.status || "0"
    console.log(book, "==========>")

    BookModel.insertMany(book, function (err, data) {
        if (err) {
            common.sendJsonResponse(res, 500, err);
        }
        common.sendResponse(res, 200, {
            code: "0",
            message: "添加成功",
            data
        })
    })
}

