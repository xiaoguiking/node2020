const common = require("../common");
const { User } = require("../../model/index");


//更新用户信息
module.exports.put= function (req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          userName: req.body.userName,
          password: req.body.password,
          title: req.body.title
        }
      },
      {
        new: true
      }
    )
      .then(hero => res.json(hero))
      .catch(err => res.json(err));
} 

