let controller = {};
const sequelize = require("sequelize");
const models = require("../models");
const Op = sequelize.Op;

controller.getData = async (req, res, next) => {
  const categories = await models.Category.findAll({
    include: [{ model: models.Product }],
    // raw: true,
  });
  res.locals.categories = categories;

  const brands = await models.Brand.findAll({
    include: [{ model: models.Product }],
  });
  res.locals.brands = brands;

  const tags = await models.Tag.findAll({});
  res.locals.tags = tags;
  next();
};

controller.showProducts = async (req, res) => {
  const categoryId = req.query.category ? parseInt(req.query.category) : 0;
  const brand = req.query.brand ? parseInt(req.query.brand) : 0;
  const tag = req.query.tag ? parseInt(req.query.tag) : 0;
  const keyword = req.query.keyword || "";
  const sort = ["newest", "popular", "price"].includes(req.query.sort)
    ? req.query.sort
    : "price";

  let options = {
    attributes: ["id", "name", "imagePath", "price", "oldPrice", "stars"],
    where: {},
    include: [],
    order: [],
  };

  if (categoryId > 0) {
    options.where.categoryId = categoryId;
  }

  if (brand > 0) {
    options.where.brandId = brand;
  }

  if (tag > 0) {
    options.include.push({ model: models.Tag, where: { id: tag } });
  }

  if (keyword.trim()) {
    options.where.name = { [Op.like]: `%${keyword}%` };
  }

  switch (sort) {
    case "newest":
      options.order.push(["createdAt", "DESC"]);
      break;
    case "popular":
      options.order.push(["stars", "DESC"]);
      break;
    default:
      options.order.push(["price", "ASC"]);
      break;
  }

  res.locals.originalUrl = removeParam("sort", req.originalUrl);
  if (Object.keys(req.query).length == 0) {
    res.locals.originalUrl += "?";
  }
  res.locals.sort = sort;

  const products = await models.Product.findAll(options);
  res.locals.products = products;

  // console.log(products);

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

  res.render("product-list");
};

controller.showDetails = async (req, res) => {
  const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);

  console.log(`Product id: ${id}`);

  const product = await models.Product.findOne({
    where: { id },
    include: [
      { model: models.Image, attributes: ["id", "name", "imagePath"] },
      {
        model: models.Review,
        attributes: ["id", "review", "stars", "createdAt"],
        include: [
          { model: models.User, attributes: ["firstName", "lastName"] },
        ],
      },
    ],
  });
  res.locals.product = product;

  res.render("product-detail");
};

function removeParam(key, sourceURL) {
  var rtn = sourceURL.split("?")[0],
    param,
    params_arr = [],
    queryString = sourceURL.indexOf("?") !== -1 ? sourceURL.split("?")[1] : "";
  if (queryString !== "") {
    params_arr = queryString.split("&");
    for (var i = params_arr.length - 1; i >= 0; i -= 1) {
      param = params_arr[i].split("=")[0];
      if (param === key) {
        params_arr.splice(i, 1);
      }
    }
    if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
  }
  return rtn;
}

module.exports = controller;
