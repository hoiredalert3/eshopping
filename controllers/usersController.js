"use strict";

const models = require("../models");

let controller = {};

controller.checkOut = async (req, res) => {
  if (req.session.cart.quantity > 0) {
    const userId = req.user.id;
    const addresses = await models.Address.findAll({ where: { userId } });

    res.locals.addresses = addresses;
    res.locals.cart = req.session.cart.getCart();
    return res.render("checkout");
  }
  res.redirect("/products");
};

controller.placeOrders = async (req, res) => {
  const userId = req.user.id;
};

controller.saveOrders = async (req, res, status) => {
  const userId = req.user.id;
};

module.exports = controller;
