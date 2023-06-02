"use strict";

const controller = {};
const models = require("../models");

controller.showHomePage = async (req, res) => {
  const [brandsData, categoriesData, featuredProducts] = await Promise.all([
    models.Brand.findAll(),
    models.Category.findAll(),
    models.Product.findAll({
      limit: 5,
      attributes: ["id", "name", "imagePath", "oldPrice", "price", "stars"],
      order: [["stars", "DESC"]],
    }),
  ]);

  console.log(featuredProducts.map((item) => item.dataValues));

  const arr1 = categoriesData.splice(2, 2);
  const arr2 = categoriesData.splice(1, 1);
  const newCategoriesData = [categoriesData, arr1, arr2];

  res.locals.categoriesData = newCategoriesData;
  res.locals.featuredProducts = featuredProducts;

  res.render("index", { brands: brandsData });
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
