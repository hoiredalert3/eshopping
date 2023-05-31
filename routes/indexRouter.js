"use strict";
const express = require("express");
const router = express.Router();
const controller = require("../controllers/indexController");
const models = require("../models");

router.get("/createTables", (req, res) => {
  //{force:true} xóa bảng cũ và tạo bảng mới nếu tồn tại
  //{alter:true} chỉnh sửa bảng đã tồn tại sao cho giống với bảng mới
  //{} nếu chưa tồn tại thì tạo mới, ngược lại thì không làm gì
  models.sequelize.sync().then(() => {
    res.send("Tables created!");
  });
});

router.get("/", controller.showHomePage);

router.get("/:page", controller.showPage);

module.exports = router;
