"use strict"
const express = require("express")
const router = express.Router()
const controller = require("../controllers/authController")
const { body, getErrorMsg } = require("../controllers/validator")

router.get("/login", controller.show)

router.post(
  "/login",
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password").trim().notEmpty().withMessage("Password is required"),
  (req, res, next) => {
    const msg = getErrorMsg(req)
    if (msg) {
      return res.render("login", { loginMessage: msg })
    }
    next()
  },
  controller.login
)

router.get("/logout", controller.logout)

module.exports = router
