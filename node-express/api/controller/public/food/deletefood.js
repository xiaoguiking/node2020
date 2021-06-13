/**
 * 接口  
 * 删除
 * api/food/delete
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { FoodModel } = require("../../../model/index")
 
 module.exports.delete = function (req, res) {
     const {_id } =req.body
    //  多项删除案例
    // deleteMany({_id: [id1,id2,id3]})
     FoodModel.deleteMany({_id}, function (err, data) {
         if (_id.length > 0) {
            common.sendResponse(res, 200, {
                error: "0",
                message: "del ok",
                list: data
            })
         } else {
            common.sendResponse(res, 200, {
                error: "-1",
                message: "del fail",
            }) 
         }
     })
 }
 
 