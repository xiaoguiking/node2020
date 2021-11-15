/**
 * @api {post} api/book/delete  删除指定的数据
 * @apiGroup Group   Book
 * @apiDescription   删除指定书籍信息
 *
 * @apiParam {String} _id   唯一id
 */

 const common = require("../../common");
 
 const { BookModel } = require("../../../model/index")
 
 module.exports.delete = function (req, res) {
     const {_id} =req.body
     console.log(_id, "id")
    //  多项删除案例
    // deleteMany({_id: [id1,id2,id3]})
    BookModel.deleteMany({_id}, function (err, data) {
         if (_id.length > 0) {
            common.sendResponse(res, 200, {
                code: "0",
                message: "del ok",
                list: data
            })
         } else {
            common.sendResponse(res, 200, {
                code: "-1",
                message: "del fail",
            }) 
         }
     })
 }
 
 