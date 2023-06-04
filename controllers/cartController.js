"use strict";

const models = require("../models");

let controller = {};

controller.add = async (req, res) => {
  const id = isNaN(req.body.id) ? 0 : parseInt(Math.max(0, req.body.id));
  const quantity = isNaN(req.body.quantity)
    ? 0
    : parseInt(Math.max(0, req.body.quantity));

  const product = await models.Product.findByPk(id);
  if (product) {
    req.session.cart.add(product, quantity);
  }
  return res.json({ quantity: req.session.cart.quantity });
};

module.exports = controller;
