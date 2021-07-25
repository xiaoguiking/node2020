
// 删除指定素材图片
'use strict';
var express = require('express');
var controller = require('../../../controller/public/image/deleteImage');
var router = express.Router();
router.delete('/:imageId', controller.deleteImage);

module.exports = router;
