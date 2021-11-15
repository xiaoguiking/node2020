// 获取当前登录用户信息
'use strict';
var express = require('express');
var controller = require('../../../controller/public/user/getUser');
var router = express.Router();
// 验证token 
const auth = require("../../../../../middleware/auth")
router.get('/getUser',auth, controller.getUser);

module.exports = router;
