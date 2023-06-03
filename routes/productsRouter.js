"use strict";
const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController");

//Show list of products
router.get("/", controller.getDate, controller.showProducts);

//Show product details
router.get("/:id", controller.getDate, controller.showDetails);

module.exports = router;
