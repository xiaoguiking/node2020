
'use strict';
var express = require('express');
var controller = require('../../../controller/public/food/infopage');
var router = express.Router();
router.post('/getInfoByPage', controller.getInfoByPage);

module.exports = router;
