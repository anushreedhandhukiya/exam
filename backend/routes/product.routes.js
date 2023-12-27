const {Router} = require("express")
const { createdata, allproduct, payment } = require("../controllers/product.controllers")

const productRoute = Router()

productRoute.post("/create",createdata)
productRoute.get("/products",allproduct)
productRoute.post("/payment",payment)

module.exports = productRoute