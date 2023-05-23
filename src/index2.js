const path = require("path");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

console.log(path.join(__dirname + "/public"));

app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/static", express.static("/public"));

app.get("/", (req, res) => {
  res.send(`Hello in ${__dirname}`);
});

app.listen(PORT, () => {
  console.log(`${__filename}`);
});
