"use strict";
const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController");

router.get("/", controller.showProducts);

module.exports = router;
