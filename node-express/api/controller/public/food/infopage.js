/**
 * 接口  
 * 查询
 * api/food/getInfoByPage
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 
 const { FoodModel } = require("../../../model/index")
 
 module.exports.getInfoByPage = function (req, res) {
    let page = req.body.page;  // 第几页
    let pageSize = req.body.pageSize || 5;   // 
    console.log(page ,pageSize, "=========>")
    FoodModel.find({},function (err, data) {
        if(err) return res.status(500).json({
            result: 1,
            error_info: '请求失败！'
        })
        let count = data.length;
        console.log(count)
        FoodModel.find({}).limit(Number(pageSize)).skip(Number(page -1) * pageSize).exec(function (err, data) {
            if(err) return res.status(500).json({
                result: 1,
                error_info: '服务器繁忙，请稍后重试！'
            })
            return res.status(200).json({
                result:0,
                message:'请求成功',
                total: count,
                list: data
            })
        })
    })
 }
 