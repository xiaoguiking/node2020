
/**
 * 读取xlsx文件 返回文件上传后所在的文件对象
 * @param {object}req
 * @param {object}res
 * @returns {object} return:文件对象
 *          
 */
const path = require("path")

const formidable = require('formidable');

const uploadFileExcel = function file(req, res) {
    //实例化formidable
    var form = new formidable.IncomingForm();
    // 指定编码语言
    form.encoding = 'utf-8';
    //使上传的文件保持原来的文件的扩展名
    form.keepExtensions = true;
    //开启该功能,使form.parse()回调函数的files参数是一个file数组
    form.multiples = true;
    form.maxFieldsSize = 10 * 1024 * 1024;
    //指定文件上传的路径 
    form.uploadDir = path.join(__dirname, "../../../../public/excel");
    console.log(form.uploadDir, "==========>文件上传路径")

    // 异步捕获处理后的文件名
    return new Promise((resolve, reject) => {
        console.log("测试")
        //转换请求中表单中的数据
        form.parse(req, function (err, fields, files) {
            console.log(req, "===============>检查")
            if (err) {
                //抛出错误
                console.log(err, "===========>err")
                throw new err;
            }
            res.writeHead(200, {'content-type': 'text/plain'});
            console.log(fields, files, "==============>文件")
            console.log('files', '文件上传后的路径--------------------------------------------:');
            console.log('info', JSON.stringify(files.file.path));
            resolve(files.file.path);
        })

    })

    
 
    var fields = [];
    var files = [];
 
    form.on('field', function (field, value) {
        console.log(1)
        fields.push([field, value]);
    });
    form.on('file', function (field, file) {
        console.log(222)
        console.log('upload file: ' + file.name);
       //判断文件类型是否是xlsx
        if (file.type != 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            fileTypeError = true;
        }
        files.push([field, file]);
    });

};

module.exports = uploadFileExcel;
