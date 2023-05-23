"use strict";

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const path = require("path");
const expressHandlebars = require("express-handlebars");

//Cau hinh static folder
//Can phai de file index.js o thu muc goc
app.use(express.static(__dirname + "/public"));

//Dinh nghia view engine
app.engine(
  "hbs",
  expressHandlebars.engine({
    layoutsDir: path.join(__dirname, "/views/layouts"),
    partialsDir: path.join(__dirname, "/views/partials"),
    extname: "hbs",
    defaultLayout: "layout",
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
