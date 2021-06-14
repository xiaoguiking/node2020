'use strict';
var express = require('express');
var router = express.Router();
var path = require("path")
// var {multer} = require("./multer");
var multer = require("multer");


// 根据当前文件目录指定文件夹
const dir = path.resolve(__dirname, '../../../../public/my-uploads/');
console.log(dir, "dir")
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    // cb(null, file.fieldname+'-'+Date.now())
    cb(null, 'aa.jpg')
  }
})

var upload = multer({ storage: storage })


router.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file 是 `avatar` 文件的信息
  // req.body 将具有文本域数据，如果存在的话
  console.log(req.file)
  res.send({
    result: 1,
    message: "提交成功",
    file: req.file.path
  })
})

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







// 单文件处理
// router.post('/upload', multer().single('img'), (req, res, next) => {
//   var body = req.body;
//   // console.log(body);
//   const basename = path.basename(req.file.path)
//   console.log(basename, "img")
//   res.send({
//     body: req.body,
//     file: req.file
//   });
// })


// // 多文件处理
// const cpUpload = multer().fields([{ name: 'img1', maxCount: 1 }, { name: 'img2', maxCount: 8 }]);
// router.post('/uploads', cpUpload, (req, res) => {
//   res.send({
//     body: req.body,
//     files: req.files
//   });
// })

module.exports = router;
