const mongoose = require("mongoose");
const common = require("../common");

const {User} = require("../../model/index")

module.exports.login = function (req, res) {
  const userName = req.query.userName;
  
  User.find({ "userName":userName},function(err,data) {
      if (err) {
          common.sendJsonResponse(res, 500, err);
          return;
      }
      console.log(data, "==============>data")
      common.sendResponse(res, 200, data);
  })

};
