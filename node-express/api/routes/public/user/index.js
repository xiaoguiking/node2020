const login = require("./login");
const reg = require("./reg");
const put = require("./updateUser");

const getUser = require("./getuser");
const getUserInfo = require("./getUserInfo");
const unfollowUser = require("./unfollowUser");
const focusUser = require("./focusUser");
const getUsers = require("./getUsers");
const insertUsers = require("./insertUsers");

module.exports = {
  login,
  reg,
  put,
  getUser,
  getUserInfo,
  unfollowUser,
  focusUser,
  getUsers,
  insertUsers
};
