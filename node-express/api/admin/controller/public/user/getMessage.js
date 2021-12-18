/**
 * 获取未读
 */

 const mongoose = require("mongoose");
 const common = require("../../common");
 const {message} = require("../../../model/index")
 
 module.exports.getMessage =  function (req, res) {
   try {
     common.sendJsonResponse(res, 200, {
       user: req.user
     })
   } catch (err) {
     next(err);
   }
 };
 