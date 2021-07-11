
/**
 * @api {put} api/book/:bookId  更新某条数据
 * @apiGroup Group   Book
 * @apiDescription   分页获取数据
 *
 * @apiParam {String} name  书籍名
 * @apiParam {String} price 价格
 * @apiParam {String} desc 描述
 * @apiParam {String} typename 书籍类型
 * @apiParam {String} typeid   类型id
 * @apiParam {String} img   图片
 * @apiParam {String} status   文章状态
 * @apiParam {String} _id   唯一id
 */

// 60e178a569a1910b57120f42
const mongoose = require("mongoose");
const {sendJsonResponse} = require("../../common");

const { BookModel } = require("../../../model/index")

// module.exports.update = async function (req, res) {
//     console.log(req.params.bookId, "id")
//     console.log(req.body.title)
//     const book = await BookModel.findById(ObjectId(req.params.bookId))
//     console.log(book, "book")
//     const {
//         name = book.name,
//         price = book.price,
//         desc = book.desc,
//         typename = book.typename,
//         typeid = book.typeid,
//         img = book.img,
//     } = req.body;

//     BookModel.updateMany({ _id: ObjectId(req.params.bookId) }, {
//         name,
//         price,
//         desc,
//         typename,
//         typeid,
//         img,
//     }, function (err, data) {
//         if (_id.length > 0) {
//             sendJsonResponse(res, 200, {
//                 error: "0",
//                 message: "update ok",
//                 list: data
//             })
//         } else {
//             sendJsonResponse(res, 200, {
//                 error: "-1",
//                 message: "update fail",
//             })
//         }
//     })
// }

module.exports.updateBook = async function (req, res, next) {
    try {
    console.log(req.params.bookId, "id")
    const book = await BookModel.findById(req.params.bookId)
    
    const bodyBook = req.body.book;
    console.log(bodyBook, "bodybook")
    book.name = bodyBook.name ||  book.name;

    console.log(book.name, "booke")
    await book.save()
    console.log(await book.save())
    sendJsonResponse(res, 200, {
        res: 0,
        message: "更新成功",
        list: book
      })
    } catch (error) {
        next(error)
    }
}