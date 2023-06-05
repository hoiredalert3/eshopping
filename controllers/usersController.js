"use strict"

const models = require("../models")

let controller = {}

controller.checkOut = async (req, res) => {
  const userId = req.user.id
}

controller.placeOrders = async (req, res) => {
  const userId = req.user.id
}

controller.saveOrders = async (req, res, status) => {
  const userId = req.user.id
}

module.exports = controller
