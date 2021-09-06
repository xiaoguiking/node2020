const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const dayjs = require("dayjs");
const cors = require("cors");
const errorHandler = require("./middleware/index");

const app = express();

// mongo 操作
require("./api/model/db");

// user 路由
const {  
  login,
  reg,
  put,
  getUser,
  getUserInfo,
  unfollowUser,
  focusUser,
}  = require("./api/routes/public/user/index")

// 路由配置
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const regRouter = require("./routes/reg");
const api = require("./routes/api");
const food = require("./routes/food");

const todos = require("./api/routes/public/todos/index");

// 获取图片素材
const getImages = require("./api/routes/public/image/getImages");
const deleteImage = require("./api/routes/public/image/deleteImage");
const collectImage = require("./api/routes/public/image/collectImage");

// book接口api
const {
  addBook,
  findBook,
  deleteBook,
  updateBook,
  getInfoByPage,
  getChannels,
  getBookById,
} = require("./api/routes/public/book/index");

//  articles
const {
  createArticle,
  getArticle,
  getArticlesList,
  updateArticle,
  deleteArticle,
} = require("./api/routes/public/article/index");

// proxy
const getImooc = require("./api/routes/public/proxy/imooc");

// todos
const uploadFile = require("./api/routes/public/file/index");

console.log("Server running at http://localhost:3000");


// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.engine("html", ejs.__express);
app.set("view engine", "html");

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(cors())

// 访问静态资源实例
// http://localhost:3000/images/book1.jpg
app.use(express.static(path.join(__dirname, "public")));

/**
 * req  请求对象
 * res  响应对象
 * next 下一个中间件
 * 放置顺序重要
 */
app.use(function (req, res, next) {
  console.log(
    "请求日志",
    req.url,
    req.method,
    dayjs(new Date()).format("YYYY-MM-DD--HH:mm:ss")
  );
  console.log("访问如何页面，此函数都会被调用");
  // let { token } = req.query;
  // console.log(token, "==========>token")
  // if (token) {
  //   next()
  // } else {
  //   res.send("缺少token")
  // }

  // 交出执行权，然后继续匹配执行。
  next();
});

// 路由中间件
app.use("/", indexRouter);
// app.use('/users', usersRouter);
// app.use('/login', loginRouter)
// app.use('/reg', regRouter)

app.use("/api", api);
// app.use("/food", food)

// localhost:3000/api/login?username=admin
app.use("/api", login);
app.use("/api", reg);
app.use("/api", put);
app.use("/api", getUser);

app.use("/api", getUserInfo);
app.use("/api", focusUser);
app.use("/api", unfollowUser);

app.use("/api", todos);

// book
app.use("/api/book", addBook);
app.use("/api/book", findBook);
app.use("/api/book", deleteBook);
app.use("/api/book", updateBook);
app.use("/api/book", getInfoByPage);
app.use("/api/book", getImages);
app.use("/api/book", getBookById);
// app.use("/api/book", getChannels);

// image
app.use("/api/image", getImages);
app.use("/api/image", collectImage);
app.use("/api/image", deleteImage);

// articles
app.use("/api/article", createArticle);
app.use("/api/article", getArticlesList);
app.use("/api/article", updateArticle);
app.use("/api/article", getArticle);
app.use("/api/article", deleteArticle);

app.use("/file", uploadFile);

// proxy
app.use("/api/proxy", getImooc);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler 错误处理中间件
app.use(errorHandler());
// error handler 错误处理中间件
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};
//   // render the error page
//   console.log("错误", err)
//   res.status(err.status || 500);
//   res.render("error");
// });

module.exports = app;
