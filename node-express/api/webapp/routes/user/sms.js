/**
 * * 验证码
 */
const express = require('express');
const controller = require('../../controller/user/sms');
const router = express.Router();
router.get('/user/sms/:mobile', controller.getSms);

module.exports = router;
