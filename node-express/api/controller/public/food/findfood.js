/**
 * @api {post} api/food/find  查询typeid 类型id获取数据
 * @apiGroup Group   food
 * @apiDescription   通过类型查询书籍信息
 *
 * @apiParam {String} typeid   类型id
 */


 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { FoodModel } = require("../../../model/index")
 
 module.exports.getTypeid = function (req, res) {
     const {typeid } =req.body
     FoodModel.find({typeid}, function (err, data) {
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
 
 