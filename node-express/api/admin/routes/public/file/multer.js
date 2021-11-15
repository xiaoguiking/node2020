const multer = require('multer');
const path = require('path');
const mkdirp = require('mkdirp')
const sd = require('silly-datetime');

module.exports = {
  multer() {
    // 存储对象
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        const date = sd.format(Date.now(), "YYYY-MM-DD");
        const dir = path.join('static/upload', date);
        
        new Promise((resolve, reject) => {
          mkdirp(dir);
          resolve();
        }).then(() => {
          cb(null, dir);
        }).catch(err => {
          console.log('创建上传目录失败：' + err.message);
        })
        
        
      },
      // 修改上传文件名
      filename: function (req, file, cb) {
        // 获取原来上传文件的后缀名
        const extname = path.extname(file.originalname);

        cb(null, Date.now() + extname)
      }
    });
    
    const upload = multer({
      storage: storage
    });

    return upload;
  }
}
