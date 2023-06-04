"use strict"

const models = require("../models")

let controller = {}

controller.show = async (req, res) => {
  res.render("login")
}

controller.login = async (req, res) => {}

module.exports = controller
