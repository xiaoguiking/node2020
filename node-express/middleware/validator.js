// 中间件验证数据配置

const { validationResult } = require("express-validator")
// can be reused by many routes

// parallel processing
module.exports =  validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};