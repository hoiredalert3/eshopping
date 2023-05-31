"use strict";

const controller = {};
const models = require("../models");

controller.showHomePage = async (req, res) => {
  let brands = [];
  const data = await models.Brand.findAll().then((brandsData) => {
    brandsData.forEach((brand) => {
      brands.push(brand.dataValues);
    });
    console.log(brandsData);
    // console.log(brands);
    res.render("index", { brands: brandsData });
  });
};

controller.showPage = (req, res, next) => {
  const pages = [
    "cart",
    "checkout",
    "contact",
    "login",
    "my-account",
    "product-detail",
    "product-list",
    "wishlist",
  ];
  if (pages.includes(req.params.page)) {
    return res.render(req.params.page);
  }
  next();
};

module.exports = controller;
