const common = require("../common");

const { User } = require("../../model/index");

// 注册
module.exports.reg = function (req, res) {
  const { userName, password, title } = req.body;
  console.log(userName, password, title)
  
  User.create(req.body, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      console.log(data, "post")
      res.json(data);
    }
  });
};
