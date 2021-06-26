// 用户注册
'use strict';
const { body, validationResult } = require('express-validator');
var express = require('express');
var controller = require('../../../controller/public/user/reg');
const {User} = require("../../../model/index")
var router = express.Router();

router.post('/users/reg',   
// 1.配置验证规则
[
body('userName')
.notEmpty().withMessage("用户名不能为空")
.custom(async userName => {
    const user = await User.findOne({userName});
    if (user) {
        return Promise.reject("用户名已存在")
    }
}),
body('password')
.notEmpty().withMessage("密码不能为空")
.custom(async password => {
    const user = await User.findOne({password});
    if (user) {
        return Promise.reject("密码已存在")
    }
}),
body('email')
.notEmpty().withMessage("邮箱不能为空")
.isEmail().withMessage("邮箱格式不正确")
.bail()
.custom(async email => {
    const user = await User.findOne({email});
    if (user) {
        return Promise.reject("邮箱已存在")
    }
})
], 
// 2.判断验证结果
(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); //验证通过
},
// 3.通过验证执行具体的控制器
controller.reg);

module.exports = router;
