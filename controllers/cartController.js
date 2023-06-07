"use strict";

const models = require("../models");

let controller = {};

controller.add = async (req, res) => {
  const id = isNaN(req.body.id) ? 0 : Math.max(0, parseInt(req.body.id));
  console.log(id);
  const quantity = isNaN(req.body.quantity)
    ? 0
    : Math.max(0, parseInt(req.body.quantity));

  const product = await models.Product.findByPk(id);
  if (product && quantity > 0) {
    req.session.cart.add(product, quantity);
  }
  return res.json({ quantity: req.session.cart.quantity });
};

controller.update = async (req, res) => {
  const id = isNaN(req.body.id) ? 0 : Math.max(0, parseInt(req.body.id));
  const quantity = isNaN(req.body.quantity)
    ? 0
    : Math.max(0, parseInt(req.body.quantity));

  if (quantity > 0) {
    const updatedItem = req.session.cart.update(id, quantity);

    return res.json({
      item: updatedItem,
      quantity: req.session.cart.quantity,
      subtotal: req.session.cart.subtotal,
      total: req.session.cart.total,
    });
  }
  return res.status(204).end();
};

controller.showCart = async (req, res) => {
  res.locals.cart = req.session.cart.getCart();
  return res.render("cart");
};

module.exports = controller;
