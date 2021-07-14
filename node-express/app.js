const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const dayjs = require('dayjs')
const cors = require("cors")
const errorHandler = require("./middleware/index");

const { nextTick } = require("process");
const app = express();

// mongo 操作
require("./api/model/db"); 

const login = require("./api/routes/public/user/login");
const reg = require("./api/routes/public/user/reg");
const put = require("./api/routes/public/user/updateuser");

const getUser = require("./api/routes/public/user/getuser")
const getUserInfo = require("./api/routes/public/user/getUserInfo")
const unfollowUser = require("./api/routes/public/user/unfollowUser")
const focusUser = require("./api/routes/public/user/focusUser")

// 路由配置
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const regRouter = require("./routes/reg");
const api = require("./routes/api");
const food = require("./routes/food");

const todos = require("./api/routes/public/todos/index")


// book接口api
const addBook = require("./api/routes/public/book/addBook");
const findBook = require("./api/routes/public/book/findBook");
const deleteBook = require("./api/routes/public/book/deleteBook");
const updateBook = require("./api/routes/public/book/updateBook");
const getInfoByPage = require("./api/routes/public/book/infopage");
const getChannels = require("./api/routes/public/book/getChannels");
const getBookById = require("./api/routes/public/book/getBookById");


//  articles
const createArticle = require("./api/routes/public/article/createArticle")
const getArticle = require("./api/routes/public/article/getArticle")
const getArticlesList  = require("./api/routes/public/article/getArticlesList")
const updateArticle = require("./api/routes/public/article/updateArticle");
const deleteArticle = require("./api/routes/public/article/deleteArticle");


// todos
const uploadFile = require("./api/routes/public/file/index");

console.log("Server running at http://localhost:3000");

// render the error page
// view engine setup
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
  // console.log(req.url, "============>请求地址")
  // console.log(req.method, "==============请求方法")
  // console.log(req.headers, "==============请求头")
  console.log("请求日志", req.url, req.method, dayjs(new Date()).format('YYYY-MM-DD--HH:mm:ss'))
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
// // api
app.use('/api', api)
// app.use("/food", food)

// localhost:3000/api/login?username=admin
app.use("/api", login);
app.use("/api", reg);
app.use("/api", put);
app.use("/api", getUser)

app.use("/api", getUserInfo)
app.use("/api", focusUser)
app.use("/api", unfollowUser)

app.use("/api", todos)

app.use("/api/book", addBook);
app.use("/api/book", findBook);
app.use("/api/book", deleteBook);
app.use("/api/book", updateBook);
app.use("/api/book", getInfoByPage);
app.use("/api/book", getBookById);
// app.use("/api/book", getChannels);


// articles
app.use("/api/article", createArticle)
app.use("/api/article", getArticlesList)
app.use("/api/article", updateArticle)
app.use("/api/article", getArticle)
app.use("/api/article", deleteArticle)







app.use("/file", uploadFile);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler 错误处理中间件
app.use(errorHandler())
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
