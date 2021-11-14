/**
 * @api {post} api/book/find  查询typeid 类型id获取数据
 * @apiGroup Group   Book
 * @apiDescription   通过类型查询书籍信息
 *
 * @apiParam {String} typeid   类型id
 */


 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { BookModel } = require("../../../model/index")
 
 module.exports.findBook = function (req, res) {
     const {typeid } =req.body
     BookModel.find({typeid}, function (err, data) {
         if (err) {
             common.sendJsonResponse(res, 500, err);
         }
         if (data.length > 0) {
            common.sendResponse(res, 200, {
                code: "1",
                message: "查询成功",
                list: data
            })
         } else {
            common.sendResponse(res, 200, {
                code: "1",
                message: "暂无数据",
                list: data
            }) 
         }
     })
 }
 
 