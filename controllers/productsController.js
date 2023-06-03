let controller = {};
const sequelize = require("sequelize");
const models = require("../models");

controller.showProducts = async (req, res) => {
  const categoryId = req.query.category ? parseInt(req.query.category) : 0;

  let options = {
    attributes: ["id", "name", "imagePath", "price", "oldPrice", "stars"],
    where: {},
  };

  if (categoryId > 0) {
    options.where.categoryId = categoryId;
  }

  const products = await models.Product.findAll(options);

  // const categories3 = await models.Category.findAll({
  //   // Join with 'Product', but don't actually return the Products
  //   include: [{ model: models.Product, attributes: [] }],
  //   // Return COUNT(Product.id) as the only attribute
  //   attributes: [
  //     "id",
  //     "name",
  //     [sequelize.fn("COUNT", sequelize.col("Products.id")), "total"],
  //   ],
  //   // Group by Category.id
  //   group: ["Category.id"],
  //   raw: true,
  // });

  // console.log(categories3);

  const categories = await models.Category.findAll({
    include: [{ model: models.Product }],
    // raw: true,
  });

  res.locals.products = products;
  res.locals.categories = categories;

  // console.log(categories);

  res.render("product-list");
};

module.exports = controller;
