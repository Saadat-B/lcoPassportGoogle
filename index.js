const express = require("express");
const mongoose = require("mongoose");
const app = express();

const auth = require("./routes/auth");
const passportConfig = require("./passport/passport");
const passport = require("passport");
mongoose.connect("mongodb://127.0.0.1:27017/passport", () => {
  console.log("DB CONNECTED");
});

app.use(passport.initialize());

app.set("view engine", "ejs");
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/");

app.listen(4000, () => {
  console.log(`Server is running at port 4000...`);
});
