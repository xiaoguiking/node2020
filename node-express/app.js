var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ejs = require("ejs");
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var regRouter = require('./routes/reg');

var api = require("./routes/api")
var food = require("./routes/food")



const { nextTick } = require('process');

var app = express();


// mongo 操作
require('./api/model/db');
const login = require('./api/routes/public/login');
const reg = require('./api/routes/public/reg');



// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.engine("html", ejs.__express);
app.set("view engine", "html");

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next) {
  console.log("访问如何页面，此函数都会被调用")
  // let { token } = req.query;
  // console.log(token, "==========>token")
  // if (token) {
  //   next()
  // } else {
  //   res.send("缺少token")
  // }
  next()
})

// 路由中间件

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/login', loginRouter)
// app.use('/reg', regRouter)
// // api
// app.use('/api', api)
// app.use("/food", food)

// localhost:3000/api/login?username=admin

app.use('/api', login)
app.use('/api', reg)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
