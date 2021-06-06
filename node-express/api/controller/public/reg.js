const common = require("../common");

const { User } = require("../../model/index");

// 注册
module.exports.reg = function (req, res) {
  const { userName, password, title } = req.body;
  console.log(userName, password, title)
  
  if (userName && password) {
    User.find({userName, password})
    .then((data) => {
      if (data.length === 0) {
        return  User.create(req.body, (err, data) => {
          if (userName && password && title) {
            res.send({
              err: "0",
              msg: "注册成功"
            })
          } else {
            res.send({
              err: "-1",
              msg: "参数错误"
            })
          }
        }); 
      } else {
        res.send({
          err: -3,
          msg: "用户名已经存在"
        })
      }
    })
  }

};
