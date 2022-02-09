const express = require("express");

var bodyParser = require("body-parser");
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"));

app.set("view engine", "ejs");

const appRouter = require("./routes/app");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");

app.use(appRouter);
app.use("/auth/", authRouter);
app.use("/users/", userRouter);

app.listen(3000);
