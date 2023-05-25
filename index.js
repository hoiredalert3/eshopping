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

app.get("/createTables", (req, res) => {
  const models = require("./models");
  //{force:true} xóa bảng cũ và tạo bảng mới nếu tồn tại
  //{alter:true} chỉnh sửa bảng đã tồn tại sao cho giống với bảng mới
  //{} nếu chưa tồn tại thì tạo mới, ngược lại thì không làm gì
  models.sequelize.sync().then(() => {
    res.send("Tables created!");
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:page", (req, res) => {
  res.render(req.params.page);
});

// app.get("/cart", (req, res) => {
//   res.render("cart");
// });

// app.get("/checkout", (req, res) => {
//   res.render("checkout");
// });

// app.get("/contact", (req, res) => {
//   res.render("contact");
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.get("/my-account", (req, res) => {
//   res.render("my-account");
// });

// app.get("/product-detail", (req, res) => {
//   res.render("product-detail");
// });

// app.get("/product-list", (req, res) => {
//   res.render("product-list");
// });

// app.get("/wishlist", (req, res) => {
//   res.render("wishlist");
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
