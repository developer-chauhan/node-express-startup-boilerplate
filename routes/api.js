var express = require("express");
var authRouter = require("./auth");
var bookRouter = require("./book");

var app = express();

app.use("/auth/", authRouter);
app.use("/book/", bookRouter);
app.use(express.static('routes'));

module.exports = app;