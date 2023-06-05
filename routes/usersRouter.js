"use strict"
const express = require("express")
const router = express.Router()
// const userController = require("../controllers/usersController")
const { body, validationResult } = require("express-validator")
const authController = require("../controllers/authController")

router.use(authController.isLoggedIn)

router.get("/my-account", (req, res) => {
  res.render("my-account")
})

module.exports = router
