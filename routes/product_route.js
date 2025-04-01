const express = require("express");
const product_router = express.Router();
const productCon = require("../controllers/prodeucts_Controller.js");
const isLoggedIn = require("../middlewares/isLoggedIn.js");
const upload = require("../middlewares/multer_middle.js");


product_router.get("/products/shop", isLoggedIn, productCon.getShopData);

product_router.get("/creatProducets", productCon.getProductDiteils);

product_router.post("/products/create", isLoggedIn, upload.single("productImg"), productCon.postCreateProduct);

product_router.get("/addToCart/:id", isLoggedIn, productCon.getAddToCards);
product_router.get("/cart", isLoggedIn, productCon.getCrtsProducts);

module.exports = product_router;

