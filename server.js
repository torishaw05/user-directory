
const express = require("express");
const path = require("path");
const mustacheExpress = require("mustache-express");
const app = express();
// const Data = require("./models/data.js");
const routes = require("./routes/index");

app.engine("mustache", mustacheExpress());
app.set("views", path.join(__dirname,"views"));
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(8081, function() {
  console.log("App is running 8081!");
})
