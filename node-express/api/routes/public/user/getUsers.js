// 获取用户信息
'use strict';
var express = require('express');
var controller = require('../../../controller/public/user/getUsers');
var router = express.Router();
// 验证token 
const auth = require("../../../../middleware/auth")
router.get('/getUsers',auth, controller.getUsers);

module.exports = router;
