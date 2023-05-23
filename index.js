"use strict";

const express = require("express");
const app = express();

const path = require("path");

const PORT = process.env.PORT || 3000;

//Cau hinh static folder
//Can phai de file index.js o thu muc goc
console.log(__dirname);
app.use("/static", express.static(path.join(__dirname, "/public")));

// app.get("/", (req, res) => {
//   res.send("Hello to Eshop");
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
