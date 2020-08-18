const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world, express");
});
app.get("/login", (req, res) => {
  res.send("登录成功");
});
app.get("/reg", (req, res) => {
  res.send("注册啦");
});
app.get("/list", (req, res) => {
  res.send("This is list page");
});

app.post("/doLogin", (req, res) => {
  //增加数据
  console.log("执行登录");
  res.send("执行登录");
});

app.put("/editUser", (req, res) => {
  // 修改用户信息
  console.log("修改成功");
  res.send("修改成功");
});

app.delete("/deleteUser", (req, res) => {
  // 删除户信息
  console.log("删除成功");
  res.send("删除成功");
});

// 二级目录
app.get("/admin/user", (req, res) => {
  console.log("admin user");
  res.send("admin user");
});

// 动态路由配置需要注意顺序

app.get("/user/list/addTest", (req, res) => {
  res.send("匹配成功测试");
});

app.get("/user/list/:id", (req, res) => {
  var id = req.params["id"];
  console.log(id, "id");
  res.send("动态路由" + id);
});

app.get("/user/list/add", (req, res) => {
  res.send("无法匹配成功，走的是动态路由");
});

// 传值
app.get("/product", (req, res) => {
  res.send("product");
});

// http://localhost:3000/producd?user=lintian
app.get("/producte", (req, res) => {
  let query = req.query;
  console.log(query, "query");
  res.send("query");
});

app.listen(3000, () => {
  console.log("server start port is 3000");
});
