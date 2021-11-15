'use strict';
var express = require('express');
var controller = require('../../../controller/public/user/unfollowUser');
var router = express.Router();
router.delete('/profiles/:username/follow', controller.unfollowUser);

module.exports = router;
