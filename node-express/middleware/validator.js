// 中间件验证数据配置

const { validationResult, buildCheckFunction } = require("express-validator");
const { isValidObjectId } = require("mongoose")
// can be reused by many routes

// parallel processing
exports = module.exports = validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

exports.isValidObjectId = (location, fields) => {
  return buildCheckFunction(location)(fields).custom(async value => {
    if (!isValidObjectId(value)) {
      console.log(value)
      return Promise.reject("ID 不是一个有效的ObjectId")
    }
  })
}