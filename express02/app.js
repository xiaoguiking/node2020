/**
 * 1,安装 yarn add ejs
 *
 * 2. app.set("view engine", "ejs")
 *
 *
 * 3.使用 默认加载模板引擎的文件夹是views
 * res.render("index", {})
 *
 */

/**
 * 将ejs后缀文件改成html文件配置流程
 * 1.在app.js添加 var ejs = require("ejs");
 * 2.注册html模板引擎代码 app.engine("html", ejs.__express)
 * 3.将模板引擎换成html代码如下：app.set("view engine", "html");
 *4.修改模板文件后缀为.html
 *
 *
 */
const express = require("express");

const ejs = require("ejs");
const app = express();

app.engine("html", ejs.__express);
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.send("hello express02");
});

// 模板引擎配置
// app.set("view engine", "ejs");

// app.get("/ejs", (req, res) => {
//   res.render("index", {});
// });

app.get("/ejs1", (req, res) => {
  let title = "This is ejs";
  res.render("index1", {
    title: title,
  });
});

app.get("/html", (req, res) => {
  let title = "This is ejs";
  res.render("index1", {
    title: title,
  });
});

// 配置静态资源文件
app.use(express.static("static"));

app.get("/news", (req, res) => {
  let newInfo = {
    username: "wanglin",
    age: 123,
  };

  let arr = ["天涯", "海角", "铁血无双"];
  let article = "<h2>渲染html标签</h2>";
  res.render("news", {
    newInfo: newInfo,
    article: article,
    flag: true,
    score: 50,
    arr: arr,
  });
});

app.listen(3002, () => {
  console.log("express02 port is 3002");
});
