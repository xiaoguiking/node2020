/**
 * @api {get} api/getUser  获取用户列表
 * @apiGroup Group   users
 * @apiDescription 获取用户列表
 *

 */

 const mongoose = require("mongoose");
 const {sendResponse, sendJsonResponse} = require("../../common");
 
 const { User } = require("../../../model/index");
 
 module.exports.getUsers = async  function (req, res) {
   console.log(req.query, "请求头")
   try {
    const user = await User.find({})
    sendResponse(res, 200, {
        code: "1",
        message:"请求成功",
        userList: user
    })

   } catch (err) {
     sendJsonResponse(res, 500, {
         code: "0",
         message: err.message
         
     })
   }
 };
 