"use strict"

const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

const path = require("path")
const expressHandlebars = require("express-handlebars")
const { createStarList } = require("./controllers/handlebarsHelper")
const { createPagination } = require("express-handlebars-paginate")
const session = require("express-session")
const redisStore = require("connect-redis").default
const { createClient } = require("redis")
const redisClient = createClient({
  // url: "rediss://red-chu95vfdvk4olio5ppi0:nIkfyp0jjez8kMtcvWrQamCAEP9zHvts@oregon-redis.render.com:6379",
  url: "redis://red-chua4me7avj345e21lkg:6379",
})
redisClient.connect().catch(console.err)

//Cau hinh static folder
//Can phai de file index.js o thu muc goc
app.use(express.static(__dirname + "/public"))

//Dinh nghia view engine
app.engine(
  "hbs",
  expressHandlebars.engine({
    layoutsDir: path.join(__dirname, "/views/layouts"),
    partialsDir: path.join(__dirname, "/views/partials"),
    extname: "hbs",
    defaultLayout: "layout",
    runtimeOptions: { allowProtoPropertiesByDefault: true },
    helpers: { createStarList, createPagination },
  })
)

app.set("view engine", "hbs")

//Cau hinh doc du lieu tu post request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Cau hinh su dung express-session
app.use(
  session({
    secret: "ojfaisdfjowe83",
    store: new redisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 20 * 60 * 1000, //20 phut
    },
  })
)

//Middleware khoi tao gio hang
app.use((req, res, next) => {
  const Cart = require("./controllers/cart")
  req.session.cart = new Cart(req.session.cart || {})
  res.locals.quantity = req.session.cart.quantity
  next()
})

//Routes
const indexRouter = require("./routes/indexRouter")
const productsRouter = require("./routes/productsRouter")
const exp = require("constants")

app.use("/", indexRouter)

app.use("/products", productsRouter)

//Middleware function at the bottom of the stack to handle a 404 response
app.use((req, res, next) => {
  res.status(404).render("error", { message: "File not found" })
})

/*
  Error-handling middleware 
  With four arguments (err, req, res, next):
*/

app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).render("error", { message: "Internal server error" })
})

// app.get("/cart", (req, res) => {
//   res.render("cart");
// });

// app.get("/checkout", (req, res) => {
//   res.render("checkout");
// });

// app.get("/contact", (req, res) => {
//   res.render("contact");
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.get("/my-account", (req, res) => {
//   res.render("my-account");
// });

// app.get("/product-detail", (req, res) => {
//   res.render("product-detail");
// });

// app.get("/product-list", (req, res) => {
//   res.render("product-list");
// });

// app.get("/wishlist", (req, res) => {
//   res.render("wishlist");
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
