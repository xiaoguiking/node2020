'use strict';
var express = require('express');
var router = express.Router();
var path = require("path")
// var {multer} = require("./multer");
var multer = require("multer");

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
    cb(null, basename+'-'+Date.now() + extname)
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

const filePath = `localhost:3000/my-uploads/`;
router.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file 是 `avatar` 文件的信息
  // req.body 将具有文本域数据，如果存在的话
  console.log(req.file)
  const {path, filename} = req.file;
  res.send({
    result: 1,
    message: "提交成功",
    file: path,
    filePath: filePath + filename
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



module.exports = router;
