const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const api = require("./server/routes/api");
const city = require("./server/model/city");
mongoose.connect("mongodb://localhost/WeatherApp", {
  useNewUrlParser: true,
});
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use("/", api);

const port = 8888;

app.listen(port, function () {
  console.log(`Runing in porr ${port}`);
});
