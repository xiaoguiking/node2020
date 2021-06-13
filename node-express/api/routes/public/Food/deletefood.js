'use strict';
var express = require('express');
var controller = require('../../../controller/public/food/deletefood');
var router = express.Router();
router.post('/delete', controller.delete);

module.exports = router;
