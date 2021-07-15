/**
 * @api {put} api/book/:bookId  更新某条数据
 * @apiGroup Group   Book
 * @apiDescription   更新某条数据
 *
 * @apiParam {String} name       书籍名
 * @apiParam {String} price      价格
 * @apiParam {String} desc       描述
 * @apiParam {String} typename   书籍类型
 * @apiParam {String} typeid     类型id
 * @apiParam {String} img        图片
 * @apiParam {String} status     文章状态
 */

// 60e178a569a1910b57120f42
// 60e2d264b47eaa507f01020b

/**
 * 
 */
const mongoose = require("mongoose");
const { sendJsonResponse } = require("../../common");
const { BookModel } = require("../../../model/index");

module.exports.updateBook = async function (req, res, next) {
  try {
    console.log(req.params.bookId, "id");
    const book = await BookModel.findById(req.params.bookId);

    const bodyBook = req.body.book;
    book.name = bodyBook.name || book.name
    book.price = bodyBook.price || book.price;
    book.desc = bodyBook.desc || book.desc;
    book.typename = bodyBook.typename || book.typename;
    book.typeid = bodyBook.typeid || book.typeid;
    book.img = bodyBook.img || book.img;
    book.status = bodyBook.status || book.status;
    await book.save();

    sendJsonResponse(res, 200, {
      error: "0",
      message: "更新成功",
      list: book,
    });
  } catch (error) {
    next(error);
  }
};
