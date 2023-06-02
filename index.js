"use strict";

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const path = require("path");
const expressHandlebars = require("express-handlebars");
const { createStarList } = require("./controllers/handlebarsHelper");

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
    runtimeOptions: { allowProtoPropertiesByDefault: true },
    helpers: { createStarList },
  })
);

app.set("view engine", "hbs");

const indexRouter = require("./routes/indexRouter");
const helper = require("./controllers/handlebarsHelper");

app.use("/", indexRouter);

//Middleware function at the bottom of the stack to handle a 404 response
app.use((req, res, next) => {
  res.status(404).render("error", { message: "File not found" });
});

/*
  Error-handling middleware 
  With four arguments (err, req, res, next):
*/

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).render("error", { message: "Internal server error" });
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
