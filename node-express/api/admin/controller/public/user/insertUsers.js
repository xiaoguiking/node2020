/**
 * @api {get} api/getUser  插入用户列表
 * @apiGroup Group   users
 * @apiDescription 获取用户列表
 *

 */

const mongoose = require("mongoose");
const { sendResponse, sendJsonResponse } = require("../../common");
const xlsx = require('node-xlsx');
const fs = require("fs");
const path = require("path");
const { User } = require("../../../model/index");

module.exports.insertUsers = async function (req, res) {
  const pathExcel = path.join(__dirname, "../../../../public/excel/file.xlsx");
  let excelContent = xlsx.parse(fs.readFileSync(pathExcel));
  // let columnName = excelContent[0].data[0];
  let data = excelContent[0].data.slice(1);

  let resList = [];
  data.forEach(list => {
    resList.push({
      userName: list[0],
      email: list[1]
    })
  })

  console.log(req.query, "请求头")
  try {
    const user = await User.insertMany(resList)
    sendResponse(res, 200, {
      code: "1",
      message: "请求成功",
      userList: user
    })

  } catch (err) {
    sendJsonResponse(res, 500, {
      code: "0",
      message: err.message
    })
  }
};
