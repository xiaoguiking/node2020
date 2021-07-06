/**
 * @api {get} api/book/getChannels  获取文章频道/类型
 * @apiGroup Group   Book
 * @apiDescription 添加书籍信息
 *
 * @apiParam {String} typeid  频道/类型
 */

 const common = require("../../common");
 
 const { BookModel } = require("../../../model/index")
 
 module.exports.getChannels = function (req, res) {
    const {typeid } =req.body
    BookModel.find({typeid}, function (err, data) {
        if (err) {
            common.sendJsonResponse(res, 500, err);
        }
        if (data.length > 0) {
           common.sendResponse(res, 200, {
               error: "1",
               message: "查询成功",
               list: data
           })
        } else {
           common.sendResponse(res, 200, {
               error: "1",
               message: "暂无数据",
               list: data
           }) 
        }
    })
 }
 