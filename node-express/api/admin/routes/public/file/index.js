'use strict';
var express = require('express');
var router = express.Router();
var path = require("path")
var multer = require("multer");
const fs = require("fs")
const Busboy = require("busboy")

const xlsx = require('node-xlsx');

const uploadFileExcel = require("./utils")
var { sendJsonResponse, sendResponse } = require("../../../controller/common")
const { imageModel } = require("../../../model/index");


// localhost:3000/file/profile

// 根据当前文件目录指定文件夹
const dir = path.resolve(__dirname, '../../../../public/my-uploads/');
// console.log(dir, "dir")

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    // let fileName = "";
    // if(file.originalname.indexOf(".")) {

    // }
    let extname = path.extname(file.originalname);
    let basename = path.basename(file.originalname, extname);
    // console.log(extname, basename, "==================>")
    // cb(null, basename  + extname)
    // cb(null, basename+'-'+Date.now() + extname)
    cb(null, basename + extname)
    // cb(null, Date.now() + extname)
    // cb(null, 'aa.jpg')
  }
})

var upload = multer({ storage: storage })

/**
 * @api {post} file/profile  单文件上传
 * @apiGroup Group   File
 * @apiDescription   单文件上传
 *
 * @apiParam {String} avatar     
 */

const filePath = `http://localhost:3000/my-uploads/`;

router.post('/profile', upload.single('avatar'), async function (req, res, next) {
  // req.file 是 `avatar` 文件的信息
  // req.body 将具有文本域数据，如果存在的话
  console.log(req.file)
  const { path, filename } = req.file;
  const fileUrl = filePath + filename;

  if (filename) {
    const image = imageModel({
      url: fileUrl
    })

    image.url = fileUrl;
    image.isCollected = "false"
    console.log(image, "========>image")

    await image.save();
  }
  return sendJsonResponse(res, 200, {
    error: 1,
    message: "提交成功",
    file: path,
    filePath: fileUrl
  })
})

/**
 * @api {post} file/photos/upload  多文件上传
 * @apiGroup Group   File
 * @apiDescription   多文件上传
 *
 * @apiParam {String} photos      
 */


router.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files 是 `photos` 文件数组的信息
  // req.body 将具有文本域数据，如果存在的话
  console.log(req.file)
  res.send({
    result: 1,
    message: "提交成功",
    // file: req.file.path
  })
})


/**
 * @api {post} file/xlsx/upload  excel 文件上传写库
 * @apiGroup Group   File
 * @apiDescription   文件上传写库
 *
 * @apiParam {String} excel      
 */
router.post("/xslx/upload", function (req, res, next) {
  try {

    const pathExcel = path.join(__dirname, "../../../../public/excel");
    let excelContent = xlsx.parse(fs.readFileSync(pathExcel + "/file.xlsx"));
    if (excelContent) {
      console.log(excelContent, "path")
      let columnName = excelContent[0].data[0];
      console.log(columnName, "columnName==========>")
      data.forEach(list => {
        let json = {
          userName: "",
          email: "",
        }
        console.log(list, "=======>list")
      })
      let data = excelContent[0].data;

      console.log(data, "============>data")
    }

    sendJsonResponse(res, 200, {
      message: "success"
    })
  } catch (error) {
    console.log(error, "==============> error")
  }

})


module.exports = router;
