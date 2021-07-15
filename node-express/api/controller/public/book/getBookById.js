/**
 * @api {get} api/book/:bookId  查询_id获取数据
 * @apiGroup Group   Book
 * @apiDescription   通过_id查询书籍信息
 *
 * @apiParam {String} _id   _id
 */
 const {sendJsonResponse} = require("../../common");
 const { BookModel } = require("../../../model/index")
 
 module.exports.getBookById = async function (req, res) {
    try {
        // get 查询路由值
        console.log(req.params.bookId, "==========>query")
        const book = await BookModel.findById(req.params.bookId)
        sendJsonResponse(res, 200, {
            error: "0",
            message: "查询成功",
            book,
        })
    } catch (error) {
        next(error)
    }
}