var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

const authRouter = require("./routes/authRouter");
const customerRouter = require("./routes/customerRouter");
const crudController = require("./routes/crudRouter");
const userRouter = require("./routes/userRouter");
const taskRouter = require("./routes/taskRouter");

var app = express();
app.use(express.json());

// view engine setup

app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use("/auth", authRouter);
app.use("/customer", customerRouter);
app.use("/crud", crudController);
app.use("/user", userRouter);
app.use("/task", taskRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
