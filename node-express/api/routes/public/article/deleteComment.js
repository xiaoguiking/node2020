'use strict';
var express = require('express');
var controller = require('../../../controller/public/article/deleteComment');
var router = express.Router();
router.delete('/articles/:slug/comments/:id', controller.deleteComment);

module.exports = router;
